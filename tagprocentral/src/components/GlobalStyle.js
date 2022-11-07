import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    
}
a{
    text-decoration: none;
    color:black;
  }


p {

}

.Bold {
  font-weight: bold;
}
.DTos {
  background-color: red;
}
`;

export default GlobalStyle;
