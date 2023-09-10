function transliterateToRussian( text ) {
  const latinToRussianMap = {
    'a': 'а',
    'b': 'б',
    'c': 'с',
    'd': 'д',
    'e': 'е',
    'f': 'ф',
    'g': 'г',
    'h': 'х',
    'i': 'и',
    'j': 'й',
    'k': 'к',
    'l': 'л',
    'm': 'м',
    'n': 'н',
    'o': 'о',
    'p': 'п',
    'q': 'к',
    'r': 'р',
    's': 'с',
    't': 'т',
    'u': 'у',
    'v': 'в',
    'w': 'в',
    'x': 'кс',
    'y': 'й',
    'z': 'з'
  };

  let result = '';

  for ( let i = 0; i < text.length; i++ ) {
    const letter = text[ i ].toLowerCase();
    if ( letter in latinToRussianMap ) {
      result += latinToRussianMap[ letter ];
    } else {
      result += text[ i ];
    }
  }

  return result;
}

console.log( transliterateToRussian( 'sorry' ) ); // вхат