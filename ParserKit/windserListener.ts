// Generated from windser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { RootContext } from "./windser";
import { BlockContext } from "./windser";
import { PropertiesDeclContext } from "./windser";
import { StateDeclContext } from "./windser";
import { ComponentDeclContext } from "./windser";
import { ElementsDeclContext } from "./windser";
import { ChangeStateDeclContext } from "./windser";
import { CondicionalReprDeclContext } from "./windser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `windser`.
 */
export default class windserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `windser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `windser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;
	/**
	 * Enter a parse tree produced by `windser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `windser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `windser.propertiesDecl`.
	 * @param ctx the parse tree
	 */
	enterPropertiesDecl?: (ctx: PropertiesDeclContext) => void;
	/**
	 * Exit a parse tree produced by `windser.propertiesDecl`.
	 * @param ctx the parse tree
	 */
	exitPropertiesDecl?: (ctx: PropertiesDeclContext) => void;
	/**
	 * Enter a parse tree produced by `windser.stateDecl`.
	 * @param ctx the parse tree
	 */
	enterStateDecl?: (ctx: StateDeclContext) => void;
	/**
	 * Exit a parse tree produced by `windser.stateDecl`.
	 * @param ctx the parse tree
	 */
	exitStateDecl?: (ctx: StateDeclContext) => void;
	/**
	 * Enter a parse tree produced by `windser.componentDecl`.
	 * @param ctx the parse tree
	 */
	enterComponentDecl?: (ctx: ComponentDeclContext) => void;
	/**
	 * Exit a parse tree produced by `windser.componentDecl`.
	 * @param ctx the parse tree
	 */
	exitComponentDecl?: (ctx: ComponentDeclContext) => void;
	/**
	 * Enter a parse tree produced by `windser.elementsDecl`.
	 * @param ctx the parse tree
	 */
	enterElementsDecl?: (ctx: ElementsDeclContext) => void;
	/**
	 * Exit a parse tree produced by `windser.elementsDecl`.
	 * @param ctx the parse tree
	 */
	exitElementsDecl?: (ctx: ElementsDeclContext) => void;
	/**
	 * Enter a parse tree produced by `windser.changeStateDecl`.
	 * @param ctx the parse tree
	 */
	enterChangeStateDecl?: (ctx: ChangeStateDeclContext) => void;
	/**
	 * Exit a parse tree produced by `windser.changeStateDecl`.
	 * @param ctx the parse tree
	 */
	exitChangeStateDecl?: (ctx: ChangeStateDeclContext) => void;
	/**
	 * Enter a parse tree produced by `windser.condicionalReprDecl`.
	 * @param ctx the parse tree
	 */
	enterCondicionalReprDecl?: (ctx: CondicionalReprDeclContext) => void;
	/**
	 * Exit a parse tree produced by `windser.condicionalReprDecl`.
	 * @param ctx the parse tree
	 */
	exitCondicionalReprDecl?: (ctx: CondicionalReprDeclContext) => void;
}

