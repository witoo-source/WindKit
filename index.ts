import { CharStreams, CommonTokenStream, ParserRuleContext, ParseTreeWalker } from "antlr4";
import windxer from "./ParserKit/windxer";
import windser, {
  BlockContext,
  ComponentDeclContext,
  PropertiesDeclContext,
  StateDeclContext,
} from "./ParserKit/windser";
import windserListener from "./ParserKit/windserListener";
import fs from "fs";

interface IState {
  id: string;
  declStr: string;
}

class Winder extends windserListener {
  //targetStream = fs.createWriteStream('index.wind', 'utf-8')
  targetStream = fs.createWriteStream("test.ts", { encoding: "utf-8" });
  private properties: string[] = [];
  private states: IState[] = [];

  private deblock<T>(ctx: T): string[] {
    return (ctx as any)
      .block()
      .getText()
      .split("{")[1]
      .split("}")[0]
      .split(",") as string[]
  }

  enterPropertiesDecl?: ((ctx: PropertiesDeclContext) => void) | undefined = (
    ctx,
  ): void => {
    this.deblock<PropertiesDeclContext>(ctx)
      .map((f) =>
        f
          .split(":")
          .map((e, i) => (i === 0 ? e + ":" : e))
          .join(" "),
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
    ctx,
  ): void => {
    this.deblock<StateDeclContext>(ctx)
      .map((f) => {
        const spF = f.split(":");

        return {
          id: spF[0],
          declStr: `const [${spF[0]}, set${spF[0].charAt(0).toUpperCase() + spF[0].slice(1)}] = useState<${spF[1]}>(${this.firstTypeDecl(spF[1])})`,
        } as IState;
      })
      .forEach((ef) => {
        this.states.push(ef);
      });

    console.log(this.states);
  };
}

ParseTreeWalker.DEFAULT.walk(
  new Winder(),
  new windser(
    new CommonTokenStream(
      new windxer(
        CharStreams.fromString(fs.readFileSync("index.wind", "utf-8")),
      ),
    ),
  ).root(),
); 
