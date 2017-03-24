import React from 'react';
import Header from './header.component.jsx';


describe("Header component",() =>{
    const wrapper = shallow(<Header/>);


    //first test case ---- check nav tag
    it("has nav tag", () => {
        expect(wrapper.find("nav")).to.have.length(1);
    });



});




