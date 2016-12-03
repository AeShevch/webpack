import path from 'path';
// import configBase from './base.conf';
import Component from './BXConfigComponent';

const config = [];
var BComponent = new Component();

BComponent.addComponent('help', {
		name: 'ul:help'
	})
;

var configBase = BComponent.mergeConfig(['help']);

config.push(configBase);

export default configBase;