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
		COMPONENTKEYWORD=1, STATEKEYWORD=2, PROPKEYWORD=3, ID=4, STRING=5, DASHCOND=6, 
		CONDREPRKEYWORD=7, LPAREN=8, RPAREN=9, LBRACE=10, RBRACE=11, DOT=12, SEMICOLON=13, 
		COLON=14, QUOTE=15, COMMA=16, WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMPONENTKEYWORD", "STATEKEYWORD", "PROPKEYWORD", "ID", "STRING", "DASHCOND", 
			"CONDREPRKEYWORD", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "DOT", "SEMICOLON", 
			"COLON", "QUOTE", "COMMA", "WS"
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
		"\u0004\u0000\u0011u\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0005\u0003G\b\u0003\n\u0003\f\u0003J\t"+
		"\u0003\u0001\u0004\u0001\u0004\u0005\u0004N\b\u0004\n\u0004\f\u0004Q\t"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u0010\u0004\u0010p\b\u0010\u000b\u0010\f\u0010q\u0001"+
		"\u0010\u0001\u0010\u0000\u0000\u0011\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011\u0001"+
		"\u0000\u0004\u0003\u0000AZ__az\u0004\u000009AZ__az\u0002\u0000\"\"\\\\"+
		"\u0003\u0000\t\n\r\r  w\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0001#\u0001\u0000\u0000\u0000"+
		"\u0003.\u0001\u0000\u0000\u0000\u00057\u0001\u0000\u0000\u0000\u0007D"+
		"\u0001\u0000\u0000\u0000\tK\u0001\u0000\u0000\u0000\u000bT\u0001\u0000"+
		"\u0000\u0000\rY\u0001\u0000\u0000\u0000\u000f\\\u0001\u0000\u0000\u0000"+
		"\u0011^\u0001\u0000\u0000\u0000\u0013`\u0001\u0000\u0000\u0000\u0015b"+
		"\u0001\u0000\u0000\u0000\u0017d\u0001\u0000\u0000\u0000\u0019f\u0001\u0000"+
		"\u0000\u0000\u001bh\u0001\u0000\u0000\u0000\u001dj\u0001\u0000\u0000\u0000"+
		"\u001fl\u0001\u0000\u0000\u0000!o\u0001\u0000\u0000\u0000#$\u0005c\u0000"+
		"\u0000$%\u0005o\u0000\u0000%&\u0005m\u0000\u0000&\'\u0005p\u0000\u0000"+
		"\'(\u0005o\u0000\u0000()\u0005n\u0000\u0000)*\u0005e\u0000\u0000*+\u0005"+
		"n\u0000\u0000+,\u0005t\u0000\u0000,-\u0005 \u0000\u0000-\u0002\u0001\u0000"+
		"\u0000\u0000./\u0005@\u0000\u0000/0\u0005S\u0000\u000001\u0005t\u0000"+
		"\u000012\u0005a\u0000\u000023\u0005t\u0000\u000034\u0005e\u0000\u0000"+
		"45\u0005s\u0000\u000056\u0005 \u0000\u00006\u0004\u0001\u0000\u0000\u0000"+
		"78\u0005@\u0000\u000089\u0005P\u0000\u00009:\u0005r\u0000\u0000:;\u0005"+
		"o\u0000\u0000;<\u0005p\u0000\u0000<=\u0005e\u0000\u0000=>\u0005r\u0000"+
		"\u0000>?\u0005t\u0000\u0000?@\u0005i\u0000\u0000@A\u0005e\u0000\u0000"+
		"AB\u0005s\u0000\u0000BC\u0005 \u0000\u0000C\u0006\u0001\u0000\u0000\u0000"+
		"DH\u0007\u0000\u0000\u0000EG\u0007\u0001\u0000\u0000FE\u0001\u0000\u0000"+
		"\u0000GJ\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000HI\u0001\u0000"+
		"\u0000\u0000I\b\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000KO\u0005"+
		"\"\u0000\u0000LN\b\u0002\u0000\u0000ML\u0001\u0000\u0000\u0000NQ\u0001"+
		"\u0000\u0000\u0000OM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000"+
		"PR\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000RS\u0005\"\u0000\u0000"+
		"S\n\u0001\u0000\u0000\u0000TU\u0005-\u0000\u0000UV\u0005-\u0000\u0000"+
		"VW\u0001\u0000\u0000\u0000WX\u0003\u0007\u0003\u0000X\f\u0001\u0000\u0000"+
		"\u0000YZ\u0005?\u0000\u0000Z[\u0003\u0007\u0003\u0000[\u000e\u0001\u0000"+
		"\u0000\u0000\\]\u0005(\u0000\u0000]\u0010\u0001\u0000\u0000\u0000^_\u0005"+
		")\u0000\u0000_\u0012\u0001\u0000\u0000\u0000`a\u0005{\u0000\u0000a\u0014"+
		"\u0001\u0000\u0000\u0000bc\u0005}\u0000\u0000c\u0016\u0001\u0000\u0000"+
		"\u0000de\u0005.\u0000\u0000e\u0018\u0001\u0000\u0000\u0000fg\u0005;\u0000"+
		"\u0000g\u001a\u0001\u0000\u0000\u0000hi\u0005:\u0000\u0000i\u001c\u0001"+
		"\u0000\u0000\u0000jk\u0005\"\u0000\u0000k\u001e\u0001\u0000\u0000\u0000"+
		"lm\u0005,\u0000\u0000m \u0001\u0000\u0000\u0000np\u0007\u0003\u0000\u0000"+
		"on\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000"+
		"\u0000qr\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000st\u0006\u0010"+
		"\u0000\u0000t\"\u0001\u0000\u0000\u0000\u0004\u0000HOq\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}