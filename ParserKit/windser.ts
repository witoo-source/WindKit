// Generated from windser.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import windserListener from "./windserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class windser extends Parser {
	public static readonly COMPONENTKEYWORD = 1;
	public static readonly STATEKEYWORD = 2;
	public static readonly PROPKEYWORD = 3;
	public static readonly ID = 4;
	public static readonly STRING = 5;
	public static readonly DASHCOND = 6;
	public static readonly CONDREPRKEYWORD = 7;
	public static readonly LPAREN = 8;
	public static readonly RPAREN = 9;
	public static readonly LBRACE = 10;
	public static readonly RBRACE = 11;
	public static readonly DOT = 12;
	public static readonly SEMICOLON = 13;
	public static readonly COLON = 14;
	public static readonly QUOTE = 15;
	public static readonly COMMA = 16;
	public static readonly WS = 17;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_propertiesDecl = 2;
	public static readonly RULE_stateDecl = 3;
	public static readonly RULE_componentDecl = 4;
	public static readonly RULE_elementsDecl = 5;
	public static readonly RULE_changeStateDecl = 6;
	public static readonly RULE_condicionalReprDecl = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'component '", 
                                                            "'@States '", 
                                                            "'@Properties '", 
                                                            null, null, 
                                                            null, null, 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "'.'", "';'", 
                                                            "':'", "'\"'", 
                                                            "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMPONENTKEYWORD", 
                                                             "STATEKEYWORD", 
                                                             "PROPKEYWORD", 
                                                             "ID", "STRING", 
                                                             "DASHCOND", 
                                                             "CONDREPRKEYWORD", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "DOT", "SEMICOLON", 
                                                             "COLON", "QUOTE", 
                                                             "COMMA", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "block", "propertiesDecl", "stateDecl", "componentDecl", "elementsDecl", 
		"changeStateDecl", "condicionalReprDecl",
	];
	public get grammarFileName(): string { return "windser.g4"; }
	public get literalNames(): (string | null)[] { return windser.literalNames; }
	public get symbolicNames(): (string | null)[] { return windser.symbolicNames; }
	public get ruleNames(): string[] { return windser.ruleNames; }
	public get serializedATN(): number[] { return windser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, windser._ATN, windser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, windser.RULE_root);
		let _la: number;
		try {
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
			case 1:
			case 2:
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0)) {
					{
					this.state = 19;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
						{
						this.state = 16;
						this.propertiesDecl();
						}
						break;
					case 2:
						{
						this.state = 17;
						this.stateDecl();
						}
						break;
					case 1:
						{
						this.state = 18;
						this.componentDecl();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 23;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 24;
				this.elementsDecl();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 25;
				this.changeStateDecl();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 26;
				this.condicionalReprDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, windser.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			this.match(windser.LBRACE);
			this.state = 34;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 32;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						this.state = 30;
						this.block();
						}
						break;
					case 2:
						{
						this.state = 31;
						this.matchWildcard();
						}
						break;
					}
					}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 37;
			this.match(windser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertiesDecl(): PropertiesDeclContext {
		let localctx: PropertiesDeclContext = new PropertiesDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, windser.RULE_propertiesDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this.match(windser.PROPKEYWORD);
			this.state = 40;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stateDecl(): StateDeclContext {
		let localctx: StateDeclContext = new StateDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, windser.RULE_stateDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this.match(windser.STATEKEYWORD);
			this.state = 43;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentDecl(): ComponentDeclContext {
		let localctx: ComponentDeclContext = new ComponentDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, windser.RULE_componentDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this.match(windser.COMPONENTKEYWORD);
			this.state = 46;
			this.match(windser.ID);
			this.state = 47;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementsDecl(): ElementsDeclContext {
		let localctx: ElementsDeclContext = new ElementsDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, windser.RULE_elementsDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.match(windser.ID);
			this.state = 50;
			this.match(windser.LPAREN);
			this.state = 51;
			_la = this._input.LA(1);
			if(!(_la===4 || _la===5)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 52;
			this.match(windser.RPAREN);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 53;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public changeStateDecl(): ChangeStateDeclContext {
		let localctx: ChangeStateDeclContext = new ChangeStateDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, windser.RULE_changeStateDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(windser.DASHCOND);
			this.state = 57;
			this.match(windser.LPAREN);
			this.state = 58;
			this.match(windser.ID);
			this.state = 59;
			this.match(windser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condicionalReprDecl(): CondicionalReprDeclContext {
		let localctx: CondicionalReprDeclContext = new CondicionalReprDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, windser.RULE_condicionalReprDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.match(windser.CONDREPRKEYWORD);
			this.state = 62;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,17,65,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,
	8,0,10,0,12,0,23,9,0,1,0,1,0,1,0,3,0,28,8,0,1,1,1,1,1,1,5,1,33,8,1,10,1,
	12,1,36,9,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,
	1,5,1,5,3,5,55,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,34,0,8,0,2,4,6,
	8,10,12,14,0,1,1,0,4,5,65,0,27,1,0,0,0,2,29,1,0,0,0,4,39,1,0,0,0,6,42,1,
	0,0,0,8,45,1,0,0,0,10,49,1,0,0,0,12,56,1,0,0,0,14,61,1,0,0,0,16,20,3,4,
	2,0,17,20,3,6,3,0,18,20,3,8,4,0,19,16,1,0,0,0,19,17,1,0,0,0,19,18,1,0,0,
	0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,28,1,0,0,0,23,21,1,0,0,0,
	24,28,3,10,5,0,25,28,3,12,6,0,26,28,3,14,7,0,27,21,1,0,0,0,27,24,1,0,0,
	0,27,25,1,0,0,0,27,26,1,0,0,0,28,1,1,0,0,0,29,34,5,10,0,0,30,33,3,2,1,0,
	31,33,9,0,0,0,32,30,1,0,0,0,32,31,1,0,0,0,33,36,1,0,0,0,34,35,1,0,0,0,34,
	32,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,38,5,11,0,0,38,3,1,0,0,0,39,40,
	5,3,0,0,40,41,3,2,1,0,41,5,1,0,0,0,42,43,5,2,0,0,43,44,3,2,1,0,44,7,1,0,
	0,0,45,46,5,1,0,0,46,47,5,4,0,0,47,48,3,2,1,0,48,9,1,0,0,0,49,50,5,4,0,
	0,50,51,5,8,0,0,51,52,7,0,0,0,52,54,5,9,0,0,53,55,3,2,1,0,54,53,1,0,0,0,
	54,55,1,0,0,0,55,11,1,0,0,0,56,57,5,6,0,0,57,58,5,8,0,0,58,59,5,4,0,0,59,
	60,5,9,0,0,60,13,1,0,0,0,61,62,5,7,0,0,62,63,3,2,1,0,63,15,1,0,0,0,6,19,
	21,27,32,34,54];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!windser.__ATN) {
			windser.__ATN = new ATNDeserializer().deserialize(windser._serializedATN);
		}

		return windser.__ATN;
	}


	static DecisionsToDFA = windser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertiesDecl_list(): PropertiesDeclContext[] {
		return this.getTypedRuleContexts(PropertiesDeclContext) as PropertiesDeclContext[];
	}
	public propertiesDecl(i: number): PropertiesDeclContext {
		return this.getTypedRuleContext(PropertiesDeclContext, i) as PropertiesDeclContext;
	}
	public stateDecl_list(): StateDeclContext[] {
		return this.getTypedRuleContexts(StateDeclContext) as StateDeclContext[];
	}
	public stateDecl(i: number): StateDeclContext {
		return this.getTypedRuleContext(StateDeclContext, i) as StateDeclContext;
	}
	public componentDecl_list(): ComponentDeclContext[] {
		return this.getTypedRuleContexts(ComponentDeclContext) as ComponentDeclContext[];
	}
	public componentDecl(i: number): ComponentDeclContext {
		return this.getTypedRuleContext(ComponentDeclContext, i) as ComponentDeclContext;
	}
	public elementsDecl(): ElementsDeclContext {
		return this.getTypedRuleContext(ElementsDeclContext, 0) as ElementsDeclContext;
	}
	public changeStateDecl(): ChangeStateDeclContext {
		return this.getTypedRuleContext(ChangeStateDeclContext, 0) as ChangeStateDeclContext;
	}
	public condicionalReprDecl(): CondicionalReprDeclContext {
		return this.getTypedRuleContext(CondicionalReprDeclContext, 0) as CondicionalReprDeclContext;
	}
    public get ruleIndex(): number {
    	return windser.RULE_root;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(windser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(windser.RBRACE, 0);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
    public get ruleIndex(): number {
    	return windser.RULE_block;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class PropertiesDeclContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROPKEYWORD(): TerminalNode {
		return this.getToken(windser.PROPKEYWORD, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return windser.RULE_propertiesDecl;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterPropertiesDecl) {
	 		listener.enterPropertiesDecl(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitPropertiesDecl) {
	 		listener.exitPropertiesDecl(this);
		}
	}
}


export class StateDeclContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STATEKEYWORD(): TerminalNode {
		return this.getToken(windser.STATEKEYWORD, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return windser.RULE_stateDecl;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterStateDecl) {
	 		listener.enterStateDecl(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitStateDecl) {
	 		listener.exitStateDecl(this);
		}
	}
}


export class ComponentDeclContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMPONENTKEYWORD(): TerminalNode {
		return this.getToken(windser.COMPONENTKEYWORD, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(windser.ID, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return windser.RULE_componentDecl;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterComponentDecl) {
	 		listener.enterComponentDecl(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitComponentDecl) {
	 		listener.exitComponentDecl(this);
		}
	}
}


export class ElementsDeclContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(windser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(windser.ID, i);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(windser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(windser.RPAREN, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(windser.STRING, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return windser.RULE_elementsDecl;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterElementsDecl) {
	 		listener.enterElementsDecl(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitElementsDecl) {
	 		listener.exitElementsDecl(this);
		}
	}
}


export class ChangeStateDeclContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DASHCOND(): TerminalNode {
		return this.getToken(windser.DASHCOND, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(windser.LPAREN, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(windser.ID, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(windser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return windser.RULE_changeStateDecl;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterChangeStateDecl) {
	 		listener.enterChangeStateDecl(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitChangeStateDecl) {
	 		listener.exitChangeStateDecl(this);
		}
	}
}


export class CondicionalReprDeclContext extends ParserRuleContext {
	constructor(parser?: windser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONDREPRKEYWORD(): TerminalNode {
		return this.getToken(windser.CONDREPRKEYWORD, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return windser.RULE_condicionalReprDecl;
	}
	public enterRule(listener: windserListener): void {
	    if(listener.enterCondicionalReprDecl) {
	 		listener.enterCondicionalReprDecl(this);
		}
	}
	public exitRule(listener: windserListener): void {
	    if(listener.exitCondicionalReprDecl) {
	 		listener.exitCondicionalReprDecl(this);
		}
	}
}
