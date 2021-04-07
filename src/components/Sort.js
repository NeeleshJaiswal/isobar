import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown} from "../predefined-component";

const Sort = ({sortBy, setSortBy}) => {

    return (
        <>
        <UncontrolledButtonDropdown>
            <DropdownToggle caret>
                {sortBy}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem divider />
                <DropdownItem onClick={() => {setSortBy('Sort By Duration')}}>{'Sort By Duration'}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => {setSortBy('Sort By Date')}}>{'Sort By Date'}</DropdownItem>
            </DropdownMenu>
        </UncontrolledButtonDropdown>

        </>
    );
};

export default Sort;