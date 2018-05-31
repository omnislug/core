var omnislug = require('../index.js'),
  expect = require('chai').expect;

describe('remove diacritics', function() {
  it('less complex characters', function(done) {
    expect(omnislug.toSlug('University of Hawaii at Mānoa')).to.be
      .equal('university-of-hawaii-at-manoa');
    expect(omnislug.toSlug('Brøderbund')).to.be.equal('broderbund');
    done();
  });
  it('more complex characters', function(done) {
    expect(omnislug.toSlug('Phở đặc biệt')).to.be.equal('pho-dac-biet');
    done();
  });
});
