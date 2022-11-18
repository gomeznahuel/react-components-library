# Welcome to React Component Library

I created this project to put into practice my knowledge about libraries and how it works. In addition, I chose some of the typical React components to unify into a repository.

## Documentation

You can find the RCL documentation [on the website](https://rcl-documentation.vercel.app/).  

## Install

```bash
npm i @gomeznahuel/react-components-library
```

## How to use the components

#### Example

```bash
import React from "react";
import { Button } from "@gomeznahuel/react-components-library";

const Example = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Button className="btn btn-success" onClick={handleClick} label="Click!" />
    </>
  );
};

export default Example;
```


## How to contribute

The project is still under construction, so if you like it enough to collaborate, just let us know or simply create a Pull Request.

## Author

[**Nahuel Gomez**](https://linkedin.com/in/gomeznahuel)
