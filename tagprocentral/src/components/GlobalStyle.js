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

table, caption, tbody, tfoot, thead, tr, th, td {
    padding: 8px;
    outline: 0;
    border-spacing: 0;
    font-size: 100%;
    vertical-align: baseline;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

`;

export default GlobalStyle;
