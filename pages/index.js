import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <p> The Legend of Zelda</p>
          </Widget.Header>
          <Widget.Content>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <p> Quizes da Galera</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl=''/>
    </QuizBackground>
  )
}
