import BackgroundStyled from "../styled-components/BackgroundStyled"

function Background(props) {
    return(
        <BackgroundStyled isLoading={props.isLoading}>
            <img className="Circle1" src="./circle.png" />
            <img className="Circle2" src="./circle.png" />
        </BackgroundStyled>
    )
}

export default Background