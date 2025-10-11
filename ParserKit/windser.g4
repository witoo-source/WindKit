parser grammar windser;
options { tokenVocab=windxer; }

root
    : (propertiesDecl | stateDecl | componentDecl)*
    | elementsDecl
    | changeStateDecl
    | condicionalReprDecl
    ;


block
    : LBRACE (block | .)*? RBRACE
    ;

propertiesDecl: PROPKEYWORD block;
stateDecl: STATEKEYWORD block ;
componentDecl: COMPONENTKEYWORD ID block ;
elementsDecl: ID LPAREN (ID | STRING) RPAREN block?;
changeStateDecl: DASHCOND LPAREN ID RPAREN ;
condicionalReprDecl: CONDREPRKEYWORD block;