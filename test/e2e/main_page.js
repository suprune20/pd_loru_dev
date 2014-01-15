'use strict';

describe('Main page', function () {
  var ptor = protractor.getInstance();

  beforeEach(function () {
    ptor.get('#/');
  });

  it('should show right page header text', function () {
    var pageHeader = ptor.findElement(protractor.By.className('page-header'));
    expect(pageHeader.getText()).toEqual('Главная страница');
  });
});