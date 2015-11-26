import chai from "chai";
import mocha from "mocha";
import {Sample} from "./../src/sample";

global.expect = chai.expect;

describe( 'Sample', () => {

	let sample = null;
	beforeEach( ( ) => {
		sample = new Sample();
	} );

	it( 'should be an object', (  ) => {

		expect( sample ).to.be.an.object;
	} );

	it( 'contains some very great properties', (  ) => {

		console.log(sample);
		expect( sample ).to.have.property('prop1');

	} );

} );