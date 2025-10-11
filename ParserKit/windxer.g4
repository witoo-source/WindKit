lexer grammar windxer;

COMPONENTKEYWORD: 'component ';
STATEKEYWORD: '@States ';
PROPKEYWORD: '@Properties ';
ID: [a-zA-Z_][a-zA-Z0-9_]*;
STRING : '"' (~["\\])* '"';
DASHCOND: '--' ID;
CONDREPRKEYWORD: '?' ID;
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
DOT: '.';
SEMICOLON: ';';
COLON: ':';
QUOTE: '"';
COMMA: ',';
WS: [ \t\r\n]+ -> skip;