parser grammar windser;
options { tokenVocab=windxer; }

root
    : (propertiesDecl | stateDecl | componentDecl)*
    | elementsDecl
    | changeStateDecl
    | condicionalReprDecl
    ;


block
    : LBRACE (propertiesDecl | stateDecl | componentDecl | elementsDecl | changeStateDecl | condicionalReprDecl | .)*? RBRACE
    ;


propertiesDecl: PROPKEYWORD block;
stateDecl: STATEKEYWORD block ;
elementsDecl: ID LPAREN (ID | STRING) RPAREN STYLEDECL? block?;
changeStateDecl: DASHCOND LPAREN (ID | STRING)? RPAREN ;
condicionalReprDecl: CONDREPRKEYWORD block;
componentDecl: COMPONENTKEYWORD ID LBRACE (elementsDecl | changeStateDecl | condicionalReprDecl)* RBRACE;