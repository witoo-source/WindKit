// Generated from /Users/wito/Developer/WindKit/ParserKit/windser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class windser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMPONENTKEYWORD=1, STATEKEYWORD=2, PROPKEYWORD=3, ID=4, STRING=5, DASHCOND=6, 
		CONDREPRKEYWORD=7, LPAREN=8, RPAREN=9, LBRACE=10, RBRACE=11, DOT=12, SEMICOLON=13, 
		COLON=14, QUOTE=15, COMMA=16, WS=17;
	public static final int
		RULE_root = 0, RULE_block = 1, RULE_propertiesDecl = 2, RULE_stateDecl = 3, 
		RULE_componentDecl = 4, RULE_elementsDecl = 5, RULE_changeStateDecl = 6, 
		RULE_condicionalReprDecl = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"root", "block", "propertiesDecl", "stateDecl", "componentDecl", "elementsDecl", 
			"changeStateDecl", "condicionalReprDecl"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'component '", "'@States '", "'@Properties '", null, null, null, 
			null, "'('", "')'", "'{'", "'}'", "'.'", "';'", "':'", "'\"'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMPONENTKEYWORD", "STATEKEYWORD", "PROPKEYWORD", "ID", "STRING", 
			"DASHCOND", "CONDREPRKEYWORD", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
			"DOT", "SEMICOLON", "COLON", "QUOTE", "COMMA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "windser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public windser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RootContext extends ParserRuleContext {
		public List<PropertiesDeclContext> propertiesDecl() {
			return getRuleContexts(PropertiesDeclContext.class);
		}
		public PropertiesDeclContext propertiesDecl(int i) {
			return getRuleContext(PropertiesDeclContext.class,i);
		}
		public List<StateDeclContext> stateDecl() {
			return getRuleContexts(StateDeclContext.class);
		}
		public StateDeclContext stateDecl(int i) {
			return getRuleContext(StateDeclContext.class,i);
		}
		public List<ComponentDeclContext> componentDecl() {
			return getRuleContexts(ComponentDeclContext.class);
		}
		public ComponentDeclContext componentDecl(int i) {
			return getRuleContext(ComponentDeclContext.class,i);
		}
		public ElementsDeclContext elementsDecl() {
			return getRuleContext(ElementsDeclContext.class,0);
		}
		public ChangeStateDeclContext changeStateDecl() {
			return getRuleContext(ChangeStateDeclContext.class,0);
		}
		public CondicionalReprDeclContext condicionalReprDecl() {
			return getRuleContext(CondicionalReprDeclContext.class,0);
		}
		public RootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root; }
	}

	public final RootContext root() throws RecognitionException {
		RootContext _localctx = new RootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_root);
		int _la;
		try {
			setState(27);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
			case COMPONENTKEYWORD:
			case STATEKEYWORD:
			case PROPKEYWORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(21);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 14L) != 0)) {
					{
					setState(19);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case PROPKEYWORD:
						{
						setState(16);
						propertiesDecl();
						}
						break;
					case STATEKEYWORD:
						{
						setState(17);
						stateDecl();
						}
						break;
					case COMPONENTKEYWORD:
						{
						setState(18);
						componentDecl();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(23);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				elementsDecl();
				}
				break;
			case DASHCOND:
				enterOuterAlt(_localctx, 3);
				{
				setState(25);
				changeStateDecl();
				}
				break;
			case CONDREPRKEYWORD:
				enterOuterAlt(_localctx, 4);
				{
				setState(26);
				condicionalReprDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(windser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(windser.RBRACE, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_block);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			match(LBRACE);
			setState(34);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					setState(32);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
					case 1:
						{
						setState(30);
						block();
						}
						break;
					case 2:
						{
						setState(31);
						matchWildcard();
						}
						break;
					}
					} 
				}
				setState(36);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(37);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertiesDeclContext extends ParserRuleContext {
		public TerminalNode PROPKEYWORD() { return getToken(windser.PROPKEYWORD, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public PropertiesDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertiesDecl; }
	}

	public final PropertiesDeclContext propertiesDecl() throws RecognitionException {
		PropertiesDeclContext _localctx = new PropertiesDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_propertiesDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			match(PROPKEYWORD);
			setState(40);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StateDeclContext extends ParserRuleContext {
		public TerminalNode STATEKEYWORD() { return getToken(windser.STATEKEYWORD, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StateDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDecl; }
	}

	public final StateDeclContext stateDecl() throws RecognitionException {
		StateDeclContext _localctx = new StateDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_stateDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(STATEKEYWORD);
			setState(43);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComponentDeclContext extends ParserRuleContext {
		public TerminalNode COMPONENTKEYWORD() { return getToken(windser.COMPONENTKEYWORD, 0); }
		public TerminalNode ID() { return getToken(windser.ID, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ComponentDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentDecl; }
	}

	public final ComponentDeclContext componentDecl() throws RecognitionException {
		ComponentDeclContext _localctx = new ComponentDeclContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_componentDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(COMPONENTKEYWORD);
			setState(46);
			match(ID);
			setState(47);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementsDeclContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(windser.ID); }
		public TerminalNode ID(int i) {
			return getToken(windser.ID, i);
		}
		public TerminalNode LPAREN() { return getToken(windser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(windser.RPAREN, 0); }
		public TerminalNode STRING() { return getToken(windser.STRING, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElementsDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementsDecl; }
	}

	public final ElementsDeclContext elementsDecl() throws RecognitionException {
		ElementsDeclContext _localctx = new ElementsDeclContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_elementsDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(ID);
			setState(50);
			match(LPAREN);
			setState(51);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==STRING) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(52);
			match(RPAREN);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACE) {
				{
				setState(53);
				block();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ChangeStateDeclContext extends ParserRuleContext {
		public TerminalNode DASHCOND() { return getToken(windser.DASHCOND, 0); }
		public TerminalNode LPAREN() { return getToken(windser.LPAREN, 0); }
		public TerminalNode ID() { return getToken(windser.ID, 0); }
		public TerminalNode RPAREN() { return getToken(windser.RPAREN, 0); }
		public ChangeStateDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_changeStateDecl; }
	}

	public final ChangeStateDeclContext changeStateDecl() throws RecognitionException {
		ChangeStateDeclContext _localctx = new ChangeStateDeclContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_changeStateDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(DASHCOND);
			setState(57);
			match(LPAREN);
			setState(58);
			match(ID);
			setState(59);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionalReprDeclContext extends ParserRuleContext {
		public TerminalNode CONDREPRKEYWORD() { return getToken(windser.CONDREPRKEYWORD, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CondicionalReprDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicionalReprDecl; }
	}

	public final CondicionalReprDeclContext condicionalReprDecl() throws RecognitionException {
		CondicionalReprDeclContext _localctx = new CondicionalReprDeclContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_condicionalReprDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(CONDREPRKEYWORD);
			setState(62);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0011A\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0014\b\u0000\n\u0000\f\u0000"+
		"\u0017\t\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u001c\b"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001!\b\u0001\n\u0001"+
		"\f\u0001$\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0003\u00057\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\"\u0000\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000\u0001\u0001\u0000"+
		"\u0004\u0005A\u0000\u001b\u0001\u0000\u0000\u0000\u0002\u001d\u0001\u0000"+
		"\u0000\u0000\u0004\'\u0001\u0000\u0000\u0000\u0006*\u0001\u0000\u0000"+
		"\u0000\b-\u0001\u0000\u0000\u0000\n1\u0001\u0000\u0000\u0000\f8\u0001"+
		"\u0000\u0000\u0000\u000e=\u0001\u0000\u0000\u0000\u0010\u0014\u0003\u0004"+
		"\u0002\u0000\u0011\u0014\u0003\u0006\u0003\u0000\u0012\u0014\u0003\b\u0004"+
		"\u0000\u0013\u0010\u0001\u0000\u0000\u0000\u0013\u0011\u0001\u0000\u0000"+
		"\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014\u0017\u0001\u0000\u0000"+
		"\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016\u0001\u0000\u0000"+
		"\u0000\u0016\u001c\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000\u0000"+
		"\u0000\u0018\u001c\u0003\n\u0005\u0000\u0019\u001c\u0003\f\u0006\u0000"+
		"\u001a\u001c\u0003\u000e\u0007\u0000\u001b\u0015\u0001\u0000\u0000\u0000"+
		"\u001b\u0018\u0001\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000"+
		"\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u0001\u0001\u0000\u0000\u0000"+
		"\u001d\"\u0005\n\u0000\u0000\u001e!\u0003\u0002\u0001\u0000\u001f!\t\u0000"+
		"\u0000\u0000 \u001e\u0001\u0000\u0000\u0000 \u001f\u0001\u0000\u0000\u0000"+
		"!$\u0001\u0000\u0000\u0000\"#\u0001\u0000\u0000\u0000\" \u0001\u0000\u0000"+
		"\u0000#%\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000\u0000%&\u0005\u000b"+
		"\u0000\u0000&\u0003\u0001\u0000\u0000\u0000\'(\u0005\u0003\u0000\u0000"+
		"()\u0003\u0002\u0001\u0000)\u0005\u0001\u0000\u0000\u0000*+\u0005\u0002"+
		"\u0000\u0000+,\u0003\u0002\u0001\u0000,\u0007\u0001\u0000\u0000\u0000"+
		"-.\u0005\u0001\u0000\u0000./\u0005\u0004\u0000\u0000/0\u0003\u0002\u0001"+
		"\u00000\t\u0001\u0000\u0000\u000012\u0005\u0004\u0000\u000023\u0005\b"+
		"\u0000\u000034\u0007\u0000\u0000\u000046\u0005\t\u0000\u000057\u0003\u0002"+
		"\u0001\u000065\u0001\u0000\u0000\u000067\u0001\u0000\u0000\u00007\u000b"+
		"\u0001\u0000\u0000\u000089\u0005\u0006\u0000\u00009:\u0005\b\u0000\u0000"+
		":;\u0005\u0004\u0000\u0000;<\u0005\t\u0000\u0000<\r\u0001\u0000\u0000"+
		"\u0000=>\u0005\u0007\u0000\u0000>?\u0003\u0002\u0001\u0000?\u000f\u0001"+
		"\u0000\u0000\u0000\u0006\u0013\u0015\u001b \"6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}