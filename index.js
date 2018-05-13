module.exports = {
  "modules": {},
  "load_module": function (lang) {
    if (!Object.keys(this.modules).length ||
        !Object.keys(this.modules).include(lang)) this.modules[lang] = require('@omnislug/' + lang);
  },
  "load_modules": function (modules) {
    for (m in modules) load_module(modules[m]);
  },
  'toSlug': function(string, langs_priority) {
    var retval = string;
    for (m in langs_priority) {
      retval = this.modules[langs_priority[m]].toSlug(retval);
    }
    return retval;
  }
}
