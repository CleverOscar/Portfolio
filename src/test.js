import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'portfolio/models/test';

F.attach(QUnit);

QUnit.module('portfolio functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('portfolio main page shows up', function() {
  F('title').text('portfolio', 'Title is set');
});
