import BackgroundStyled from "../styled-components/BackgroundStyled"

function Background(props) {
    return(
        <BackgroundStyled isLoading={props.isLoading}>

                <img className="Waves" src="./stacked-waves-haikei.svg" ></img>

        </BackgroundStyled>
        
    )
}

export default Background