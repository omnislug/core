var omnislug = require('../index.js'),
      expect = require('chai').expect;

omnislug.load_module('zh');

describe('Chinese (zh)', function() {
  it('all hanzi', function(done) {
    expect(omnislug.toSlug("恭喜發財", ["zh"])).to.be.equal("gong-xi-fa-cai");
    done();
  });
});
