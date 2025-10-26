import {
  CharStreams,
  CommonTokenStream,
  ParserRuleContext,
  ParseTreeWalker,
} from "antlr4";
import windxer from "./ParserKit/windxer";
import windser, {
  BlockContext,
  ChangeStateDeclContext,
  ComponentDeclContext,
  ElementsDeclContext,
  PropertiesDeclContext,
  StateDeclContext,
} from "./ParserKit/windser";
import windserListener from "./ParserKit/windserListener";
import fs from "fs";

class Winder extends windserListener {
  //targetStream = fs.createWriteStream('index.wind', 'utf-8')
  targetStream = fs.createWriteStream("test.ts", { encoding: "utf-8" });
  private properties: string[] = [];
  private states: string[] = [];
  private elements: string[] = [];

  private deblock<T>(ctx: T): string[] {
    return (ctx as any)
      .block()
      .getText()
      .split("{")[1]
      .split("}")[0]
      .split(",") as string[];
  }

  enterPropertiesDecl?: ((ctx: PropertiesDeclContext) => void) | undefined = (
    ctx
  ): void => {
    this.deblock<PropertiesDeclContext>(ctx)
      .map((f) =>
        f
          .split(":")
          .map((e, i) => (i === 0 ? e + ":" : e))
          .join(" ")
      )
      .forEach((ef) => {
        this.properties.push(ef);
      });

    console.log(this.properties);
  };

  private firstTypeDecl(type: string) {
    if (type.includes("[]")) return "[]";

    switch (type) {
      case "string":
        return '""';
      case "number":
        return "0";
      case "boolean":
        return "false";
    }
  }

  enterStateDecl?: ((ctx: StateDeclContext) => void) | undefined = (
    ctx
  ): void => {
    this.deblock<StateDeclContext>(ctx)
      .map((f) => {
        const spF = f.split(":");

        return `const [${spF[0]}, set${
          spF[0].charAt(0).toUpperCase() + spF[0].slice(1)
        }] = useState<${spF[1]}>(${this.firstTypeDecl(spF[1])})`;
      })
      .forEach((ef) => {
        this.states.push(ef);
      });

    console.log(this.states);
  };

  enterElementsDecl?: ((ctx: ElementsDeclContext) => void) | undefined = (
    ctx
  ): void => {
    const elementIdef: string =
      ctx.ID(0).getText().toLowerCase()
    this.elements.push(
      `<${elementIdef === "text" ? "p" : elementIdef}${
        ctx.STYLEDECL()?.getText()
          ? " className=" + ctx.STYLEDECL()?.getText().slice(1, -1)
          : ""
      }${
        ctx.block()?.getText()
          ? ` onClick={() => ${
              ctx.block().changeStateDecl_list()
                ? "{" +
                  ctx
                    .block()
                    .changeStateDecl_list()
                    .map((l) => {
                      return (
                        "set" +
                        l.getText().split("-")[2].charAt(0).toUpperCase() +
                        l.getText().split("-")[2].slice(1)
                      );
                    })
                    .join(";\n")
                : ctx.block().getText()
            }}`
          : ""
      }>${
        ctx.ID(1)?.getText
          ? "{" + ctx.ID(1).getText() + "}"
          : ctx.STRING().getText().slice(1, -1)
      }</${elementIdef === "text" ? "p" : elementIdef}>`
    );
  };

  exitComponentDecl?: ((ctx: ComponentDeclContext) => void) | undefined = (
    ctx
  ): void => {
    console.log(this.elements);
    fs.writeFileSync(
      "index.tsx",`import { type JSX, useState } from 'react'

interface I${ctx.ID().getText()} {
  ${this.properties.join("\n\t")}
}
      
const ${ctx.ID().getText()}: React.FC<I${ctx.ID().getText()}> = ({ ${this.properties.map((e) => e.split(':')[0]).join(', ')} }: I${ctx.ID().getText()}): JSX.Element => {
  ${this.states.join("\n")}

  return (
    <div>
      ${this.elements.join("\n")}
    </div>
  )
}
  
export default ${ctx.ID().getText()};
`
    );
  };
}

ParseTreeWalker.DEFAULT.walk(
  new Winder(),
  new windser(
    new CommonTokenStream(
      new windxer(
        CharStreams.fromString(fs.readFileSync("index.wind", "utf-8"))
      )
    )
  ).root()
);
