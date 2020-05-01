  import React from 'react';
import "rbx/index.css";
import { Dropdown, Button, Icon } from "rbx";
import "../style/card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Sizes = ({ sizes, state }) => {
  var newSizes = [];
  newSizes[0] = sizes[2];
  newSizes[1] = sizes[1];
  newSizes[2] = sizes[0];
  newSizes[3] = sizes[3];
  sizes = newSizes;


  const handleClick = (size) => {
    if (!size.includes("Out of stock"))
      state.setSizeState(size);
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button size="small">
          <span>Choose size</span>
          <Icon size="small">
            <FontAwesomeIcon icon={faAngleDown} />
          </Icon>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Content>
        {sizes.map(size => 
           <Dropdown.Item
              onClick={() => handleClick(size)}
           > {size} </Dropdown.Item>)}
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Sizes;