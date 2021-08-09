import LoadingStyled from '../styled-components/LoadingStyled'
import Background from './Background'

function Loading() {
    return(
        <>
            <LoadingStyled>
                <Background isLoading={true} />
                <LoadingStyled.Spinner />
            </LoadingStyled>
        </>
    )
}

export default Loading