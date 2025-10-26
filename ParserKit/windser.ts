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
	public static readonly STYLEDECL = 4;
	public static readonly ID = 5;
	public static readonly STRING = 6;
	public static readonly DASHCOND = 7;
	public static readonly CONDREPRKEYWORD = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly LBRACE = 11;
	public static readonly RBRACE = 12;
	public static readonly DOT = 13;
	public static readonly SEMICOLON = 14;
	public static readonly COLON = 15;
	public static readonly QUOTE = 16;
	public static readonly COMMA = 17;
	public static readonly LCORCH = 18;
	public static readonly RCORCH = 19;
	public static readonly WS = 20;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_propertiesDecl = 2;
	public static readonly RULE_stateDecl = 3;
	public static readonly RULE_elementsDecl = 4;
	public static readonly RULE_changeStateDecl = 5;
	public static readonly RULE_condicionalReprDecl = 6;
	public static readonly RULE_componentDecl = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'component '", 
                                                            "'@States '", 
                                                            "'@Properties '", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'.'", 
                                                            "';'", "':'", 
                                                            "'\"'", "','", 
                                                            "'['", "']'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMPONENTKEYWORD", 
                                                             "STATEKEYWORD", 
                                                             "PROPKEYWORD", 
                                                             "STYLEDECL", 
                                                             "ID", "STRING", 
                                                             "DASHCOND", 
                                                             "CONDREPRKEYWORD", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "DOT", "SEMICOLON", 
                                                             "COLON", "QUOTE", 
                                                             "COMMA", "LCORCH", 
                                                             "RCORCH", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "block", "propertiesDecl", "stateDecl", "elementsDecl", "changeStateDecl", 
		"condicionalReprDecl", "componentDecl",
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
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 24;
				this.elementsDecl();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 25;
				this.changeStateDecl();
				}
				break;
			case 8:
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
			this.state = 39;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 37;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						this.state = 30;
						this.propertiesDecl();
						}
						break;
					case 2:
						{
						this.state = 31;
						this.stateDecl();
						}
						break;
					case 3:
						{
						this.state = 32;
						this.componentDecl();
						}
						break;
					case 4:
						{
						this.state = 33;
						this.elementsDecl();
						}
						break;
					case 5:
						{
						this.state = 34;
						this.changeStateDecl();
						}
						break;
					case 6:
						{
						this.state = 35;
						this.condicionalReprDecl();
						}
						break;
					case 7:
						{
						this.state = 36;
						this.matchWildcard();
						}
						break;
					}
					}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 42;
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
			this.state = 44;
			this.match(windser.PROPKEYWORD);
			this.state = 45;
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
			this.state = 47;
			this.match(windser.STATEKEYWORD);
			this.state = 48;
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
		this.enterRule(localctx, 8, windser.RULE_elementsDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this.match(windser.ID);
			this.state = 51;
			this.match(windser.LPAREN);
			this.state = 52;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===6)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 53;
			this.match(windser.RPAREN);
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 54;
				this.match(windser.STYLEDECL);
				}
				break;
			}
			this.state = 58;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 57;
				this.block();
				}
				break;
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
		this.enterRule(localctx, 10, windser.RULE_changeStateDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(windser.DASHCOND);
			this.state = 61;
			this.match(windser.LPAREN);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===6) {
				{
				this.state = 62;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===6)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 65;
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
		this.enterRule(localctx, 12, windser.RULE_condicionalReprDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(windser.CONDREPRKEYWORD);
			this.state = 68;
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
		this.enterRule(localctx, 14, windser.RULE_componentDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this.match(windser.COMPONENTKEYWORD);
			this.state = 71;
			this.match(windser.ID);
			this.state = 72;
			this.match(windser.LBRACE);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 416) !== 0)) {
				{
				this.state = 76;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 5:
					{
					this.state = 73;
					this.elementsDecl();
					}
					break;
				case 7:
					{
					this.state = 74;
					this.changeStateDecl();
					}
					break;
				case 8:
					{
					this.state = 75;
					this.condicionalReprDecl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 81;
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

	public static readonly _serializedATN: number[] = [4,1,20,84,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,
	8,0,10,0,12,0,23,9,0,1,0,1,0,1,0,3,0,28,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,5,1,38,8,1,10,1,12,1,41,9,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,
	1,4,1,4,1,4,3,4,56,8,4,1,4,3,4,59,8,4,1,5,1,5,1,5,3,5,64,8,5,1,5,1,5,1,
	6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,77,8,7,10,7,12,7,80,9,7,1,7,1,7,1,
	7,1,39,0,8,0,2,4,6,8,10,12,14,0,1,1,0,5,6,94,0,27,1,0,0,0,2,29,1,0,0,0,
	4,44,1,0,0,0,6,47,1,0,0,0,8,50,1,0,0,0,10,60,1,0,0,0,12,67,1,0,0,0,14,70,
	1,0,0,0,16,20,3,4,2,0,17,20,3,6,3,0,18,20,3,14,7,0,19,16,1,0,0,0,19,17,
	1,0,0,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,28,1,
	0,0,0,23,21,1,0,0,0,24,28,3,8,4,0,25,28,3,10,5,0,26,28,3,12,6,0,27,21,1,
	0,0,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,28,1,1,0,0,0,29,39,5,11,
	0,0,30,38,3,4,2,0,31,38,3,6,3,0,32,38,3,14,7,0,33,38,3,8,4,0,34,38,3,10,
	5,0,35,38,3,12,6,0,36,38,9,0,0,0,37,30,1,0,0,0,37,31,1,0,0,0,37,32,1,0,
	0,0,37,33,1,0,0,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,41,1,0,0,
	0,39,40,1,0,0,0,39,37,1,0,0,0,40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,12,0,
	0,43,3,1,0,0,0,44,45,5,3,0,0,45,46,3,2,1,0,46,5,1,0,0,0,47,48,5,2,0,0,48,
	49,3,2,1,0,49,7,1,0,0,0,50,51,5,5,0,0,51,52,5,9,0,0,52,53,7,0,0,0,53,55,
	5,10,0,0,54,56,5,4,0,0,55,54,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,59,
	3,2,1,0,58,57,1,0,0,0,58,59,1,0,0,0,59,9,1,0,0,0,60,61,5,7,0,0,61,63,5,
	9,0,0,62,64,7,0,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,5,10,
	0,0,66,11,1,0,0,0,67,68,5,8,0,0,68,69,3,2,1,0,69,13,1,0,0,0,70,71,5,1,0,
	0,71,72,5,5,0,0,72,78,5,11,0,0,73,77,3,8,4,0,74,77,3,10,5,0,75,77,3,12,
	6,0,76,73,1,0,0,0,76,74,1,0,0,0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,
	0,78,79,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,5,12,0,0,82,15,1,0,0,
	0,10,19,21,27,37,39,55,58,63,76,78];

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
	public elementsDecl_list(): ElementsDeclContext[] {
		return this.getTypedRuleContexts(ElementsDeclContext) as ElementsDeclContext[];
	}
	public elementsDecl(i: number): ElementsDeclContext {
		return this.getTypedRuleContext(ElementsDeclContext, i) as ElementsDeclContext;
	}
	public changeStateDecl_list(): ChangeStateDeclContext[] {
		return this.getTypedRuleContexts(ChangeStateDeclContext) as ChangeStateDeclContext[];
	}
	public changeStateDecl(i: number): ChangeStateDeclContext {
		return this.getTypedRuleContext(ChangeStateDeclContext, i) as ChangeStateDeclContext;
	}
	public condicionalReprDecl_list(): CondicionalReprDeclContext[] {
		return this.getTypedRuleContexts(CondicionalReprDeclContext) as CondicionalReprDeclContext[];
	}
	public condicionalReprDecl(i: number): CondicionalReprDeclContext {
		return this.getTypedRuleContext(CondicionalReprDeclContext, i) as CondicionalReprDeclContext;
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
	public STYLEDECL(): TerminalNode {
		return this.getToken(windser.STYLEDECL, 0);
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
	public RPAREN(): TerminalNode {
		return this.getToken(windser.RPAREN, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(windser.ID, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(windser.STRING, 0);
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
	public LBRACE(): TerminalNode {
		return this.getToken(windser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(windser.RBRACE, 0);
	}
	public elementsDecl_list(): ElementsDeclContext[] {
		return this.getTypedRuleContexts(ElementsDeclContext) as ElementsDeclContext[];
	}
	public elementsDecl(i: number): ElementsDeclContext {
		return this.getTypedRuleContext(ElementsDeclContext, i) as ElementsDeclContext;
	}
	public changeStateDecl_list(): ChangeStateDeclContext[] {
		return this.getTypedRuleContexts(ChangeStateDeclContext) as ChangeStateDeclContext[];
	}
	public changeStateDecl(i: number): ChangeStateDeclContext {
		return this.getTypedRuleContext(ChangeStateDeclContext, i) as ChangeStateDeclContext;
	}
	public condicionalReprDecl_list(): CondicionalReprDeclContext[] {
		return this.getTypedRuleContexts(CondicionalReprDeclContext) as CondicionalReprDeclContext[];
	}
	public condicionalReprDecl(i: number): CondicionalReprDeclContext {
		return this.getTypedRuleContext(CondicionalReprDeclContext, i) as CondicionalReprDeclContext;
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
