import path from 'path';
// import configBase from './base.conf';
import Component from './BXConfigComponent';

const config = [];
var BComponent = new Component();

BComponent.addComponent('help', {
		name: 'ul:help'
	})
	.addComponent('test', {
		name: 'ab:modal'
	})
;

var configBase = BComponent.mergeConfig([
	'help',
	'test'
]);

config.push(configBase);

export default configBase;