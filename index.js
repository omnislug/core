module.exports = {
  'modules': {
    'default': {
      'toSlug': (string) => {
        var retval = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .toLowerCase().split(' ').join('-');
        retval = retval.replace(/[åđø]/g, function(match) {
          var letters = {
            'å': 'a',
            'đ': 'd',
            'ø': 'o'
          }
          return letters[match];
        });
        return retval;
      }
    }
  },
  'load_module': function (lang) {
    if (!Object.keys(this.modules).length ||
        !Array.prototype.includes.call(Object.keys(this.modules), lang))
      this.modules[lang] = require('@omnislug/' + lang);
  },
  'load_modules': function (modules) {
    for (m in modules) load_module(modules[m]);
  },
  'toSlug': function(string, langs_priority) {
    var retval = string;
    if (langs_priority === undefined) langs_priority = ['default'];
    else if (!langs_priority.includes('default')) {
      langs_priority.push('default');
    }
    for (m in langs_priority) {
      retval = this.modules[langs_priority[m]].toSlug(retval);
    }
    return retval;
  }
}
