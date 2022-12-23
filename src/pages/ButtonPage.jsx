import { GoBell } from 'react-icons/go'
import { Button } from '../components/Button'

export const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button warning outline icon>
          <GoBell />
          Click here
        </Button>
      </div>
      <div>
        <Button danger>Buy Now!</Button>
      </div>
      <div>
        <Button success>See Deal!</Button>
      </div>
      <div>
        <Button primary>Hide Ads</Button>
      </div>
      <div>
        <Button secondary rounded>
          See More
        </Button>
      </div>
    </div>
  )
}
