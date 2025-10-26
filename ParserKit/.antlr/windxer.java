// Generated from /Users/wito/Developer/WindKit/ParserKit/windxer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class windxer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMPONENTKEYWORD=1, STATEKEYWORD=2, PROPKEYWORD=3, STYLEDECL=4, ID=5, 
		STRING=6, DASHCOND=7, CONDREPRKEYWORD=8, LPAREN=9, RPAREN=10, LBRACE=11, 
		RBRACE=12, DOT=13, SEMICOLON=14, COLON=15, QUOTE=16, COMMA=17, LCORCH=18, 
		RCORCH=19, WS=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMPONENTKEYWORD", "STATEKEYWORD", "PROPKEYWORD", "STYLEDECL", "ID", 
			"STRING", "DASHCOND", "CONDREPRKEYWORD", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "DOT", "SEMICOLON", "COLON", "QUOTE", "COMMA", "LCORCH", "RCORCH", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'component '", "'@States '", "'@Properties '", null, null, null, 
			null, null, "'('", "')'", "'{'", "'}'", "'.'", "';'", "':'", "'\"'", 
			"','", "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMPONENTKEYWORD", "STATEKEYWORD", "PROPKEYWORD", "STYLEDECL", 
			"ID", "STRING", "DASHCOND", "CONDREPRKEYWORD", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "DOT", "SEMICOLON", "COLON", "QUOTE", "COMMA", "LCORCH", "RCORCH", 
			"WS"
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


	public windxer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "windxer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0014\u0083\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0005\u0004Q\b\u0004\n\u0004\f\u0004T\t\u0004\u0001\u0005"+
		"\u0001\u0005\u0005\u0005X\b\u0005\n\u0005\f\u0005[\t\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0004\u0013~\b"+
		"\u0013\u000b\u0013\f\u0013\u007f\u0001\u0013\u0001\u0013\u0000\u0000\u0014"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014\u0001\u0000\u0004"+
		"\u0003\u0000AZ__az\u0004\u000009AZ__az\u0002\u0000\"\"\\\\\u0003\u0000"+
		"\t\n\r\r  \u0085\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0001)\u0001"+
		"\u0000\u0000\u0000\u00034\u0001\u0000\u0000\u0000\u0005=\u0001\u0000\u0000"+
		"\u0000\u0007J\u0001\u0000\u0000\u0000\tN\u0001\u0000\u0000\u0000\u000b"+
		"U\u0001\u0000\u0000\u0000\r^\u0001\u0000\u0000\u0000\u000fc\u0001\u0000"+
		"\u0000\u0000\u0011f\u0001\u0000\u0000\u0000\u0013h\u0001\u0000\u0000\u0000"+
		"\u0015j\u0001\u0000\u0000\u0000\u0017l\u0001\u0000\u0000\u0000\u0019n"+
		"\u0001\u0000\u0000\u0000\u001bp\u0001\u0000\u0000\u0000\u001dr\u0001\u0000"+
		"\u0000\u0000\u001ft\u0001\u0000\u0000\u0000!v\u0001\u0000\u0000\u0000"+
		"#x\u0001\u0000\u0000\u0000%z\u0001\u0000\u0000\u0000\'}\u0001\u0000\u0000"+
		"\u0000)*\u0005c\u0000\u0000*+\u0005o\u0000\u0000+,\u0005m\u0000\u0000"+
		",-\u0005p\u0000\u0000-.\u0005o\u0000\u0000./\u0005n\u0000\u0000/0\u0005"+
		"e\u0000\u000001\u0005n\u0000\u000012\u0005t\u0000\u000023\u0005 \u0000"+
		"\u00003\u0002\u0001\u0000\u0000\u000045\u0005@\u0000\u000056\u0005S\u0000"+
		"\u000067\u0005t\u0000\u000078\u0005a\u0000\u000089\u0005t\u0000\u0000"+
		"9:\u0005e\u0000\u0000:;\u0005s\u0000\u0000;<\u0005 \u0000\u0000<\u0004"+
		"\u0001\u0000\u0000\u0000=>\u0005@\u0000\u0000>?\u0005P\u0000\u0000?@\u0005"+
		"r\u0000\u0000@A\u0005o\u0000\u0000AB\u0005p\u0000\u0000BC\u0005e\u0000"+
		"\u0000CD\u0005r\u0000\u0000DE\u0005t\u0000\u0000EF\u0005i\u0000\u0000"+
		"FG\u0005e\u0000\u0000GH\u0005s\u0000\u0000HI\u0005 \u0000\u0000I\u0006"+
		"\u0001\u0000\u0000\u0000JK\u0003#\u0011\u0000KL\u0003\u000b\u0005\u0000"+
		"LM\u0003%\u0012\u0000M\b\u0001\u0000\u0000\u0000NR\u0007\u0000\u0000\u0000"+
		"OQ\u0007\u0001\u0000\u0000PO\u0001\u0000\u0000\u0000QT\u0001\u0000\u0000"+
		"\u0000RP\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000\u0000S\n\u0001\u0000"+
		"\u0000\u0000TR\u0001\u0000\u0000\u0000UY\u0005\"\u0000\u0000VX\b\u0002"+
		"\u0000\u0000WV\u0001\u0000\u0000\u0000X[\u0001\u0000\u0000\u0000YW\u0001"+
		"\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z\\\u0001\u0000\u0000\u0000"+
		"[Y\u0001\u0000\u0000\u0000\\]\u0005\"\u0000\u0000]\f\u0001\u0000\u0000"+
		"\u0000^_\u0005-\u0000\u0000_`\u0005-\u0000\u0000`a\u0001\u0000\u0000\u0000"+
		"ab\u0003\t\u0004\u0000b\u000e\u0001\u0000\u0000\u0000cd\u0005?\u0000\u0000"+
		"de\u0003\t\u0004\u0000e\u0010\u0001\u0000\u0000\u0000fg\u0005(\u0000\u0000"+
		"g\u0012\u0001\u0000\u0000\u0000hi\u0005)\u0000\u0000i\u0014\u0001\u0000"+
		"\u0000\u0000jk\u0005{\u0000\u0000k\u0016\u0001\u0000\u0000\u0000lm\u0005"+
		"}\u0000\u0000m\u0018\u0001\u0000\u0000\u0000no\u0005.\u0000\u0000o\u001a"+
		"\u0001\u0000\u0000\u0000pq\u0005;\u0000\u0000q\u001c\u0001\u0000\u0000"+
		"\u0000rs\u0005:\u0000\u0000s\u001e\u0001\u0000\u0000\u0000tu\u0005\"\u0000"+
		"\u0000u \u0001\u0000\u0000\u0000vw\u0005,\u0000\u0000w\"\u0001\u0000\u0000"+
		"\u0000xy\u0005[\u0000\u0000y$\u0001\u0000\u0000\u0000z{\u0005]\u0000\u0000"+
		"{&\u0001\u0000\u0000\u0000|~\u0007\u0003\u0000\u0000}|\u0001\u0000\u0000"+
		"\u0000~\u007f\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u007f"+
		"\u0080\u0001\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081"+
		"\u0082\u0006\u0013\u0000\u0000\u0082(\u0001\u0000\u0000\u0000\u0004\u0000"+
		"RY\u007f\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}