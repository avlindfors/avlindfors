import { css } from "@emotion/core"
import { colors } from "./variables"
export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${colors.text.main};
  };

  body {
    background: ${colors.main.background.dark};
    overflow-x:hidden;
  };
`
