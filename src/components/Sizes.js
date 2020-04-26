  import React from 'react';
import "rbx/index.css";
import { Dropdown, Button, Icon } from "rbx";
import "../style/card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Sizes = ({ sizes, state }) => {
  const handleClick = (size) => {
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
              //onClick={() => state.setSizeState(size)}
              onClick={() => handleClick(size)}
           > {size} </Dropdown.Item>)}
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Sizes;