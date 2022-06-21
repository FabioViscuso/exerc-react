import Container from "./Container";
import GithubUser from './GithubUser';

function App() {
    return (
        <div>
            <Container title={<h1>Hello world!</h1>}>
                <GithubUser username="FabioViscuso" />
            </Container >
        </div>
    );
}

export default App;
