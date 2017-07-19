import React from 'react';

import Card, {
  CardContent,
  CardActions,
} from 'material-ui/Card';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import CardGridWrapper from '../components/CardGridWrapper';

export default class Home extends React.Component {
  renderWelcomeCard = () => (
    <Card>
      <CardContent>
        <Typography type="headline" component="h2">Welcome to React App</Typography>

        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis, diam id
          dapibus auctor, augue urna bibendum ligula, id finibus est tortor vel dolor.
          Phasellus a nulla tellus. Phasellus augue ante, consequat vel condimentum eu,
          vulputate vitae nulla. Morbi ut finibus risus. Etiam gravida felis lectus, eu
          sagittis dolor auctor et. Vivamus nec leo non ligula tincidunt vulputate quis
          efficitur mi. In est eros, dignissim ut aliquet ut, ultrices eget nisi.
        </Typography>
      </CardContent>
      <CardActions>
        <Button compact color="primary">Share</Button>
        <Button compact color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );

  renderPlaceholderCard = () => (
    <Card>
      <CardContent>
        <Typography type="headline" component="h2">Redux included as well</Typography>
        <Typography component="p">
          Proin odio dolor, aliquet ac tellus sit amet, blandit venenatis massa. Phasellus
          id aliquet dui, eu rutrum lectus. Suspendisse hendrerit sollicitudin mauris, sed
          venenatis augue tristique et. Proin sed tortor lacinia, finibus diam eget,
          vulputate elit. Sed venenatis nunc nec urna molestie aliquet a at tortor. Proin
          dignissim diam ac turpis viverra auctor. Sed ac faucibus mauris, at consequat
          ipsum. Nunc cursus nunc id augue aliquet, sed vulputate nisl commodo.
        </Typography>
      </CardContent>
      <CardActions>
        <Button compact color="primary">Share</Button>
        <Button compact color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );

  render() {
    return (
      <CardGridWrapper>
        { this.renderWelcomeCard() }
        { this.renderPlaceholderCard() }
      </CardGridWrapper>
    );
  }
}
