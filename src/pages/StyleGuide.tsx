import Image from '../components/Image';
import { Button } from '../ui/Button';
import { Error } from '../ui/Error';
import { Input } from '../ui/form/Input';

const StyleGuide = () => {
  return (
    <div>
      <div>
        <h2>Buttons</h2>

        <Button>Regístrate!</Button>
        <Button variant="green">Regístrate!</Button>
        <Button variant="purple">Regístrate!</Button>
        <Button variant="purple" disabled>
          Regístrate!
        </Button>
      </div>

      <div>
        <h2>Inputs</h2>

        <Input name="description" placeholder="Somos minicode" />
        <Input hasError name="description" placeholder="Somos minicode" />
      </div>

      <div>
        <h2>Errors</h2>

        <Error size="s">Hay una serpiente en mi bota</Error>
        <Error>Hay una serpiente en mi bota</Error>
        <Error size="l">Hay una serpiente en mi bota</Error>
        <Error size="xl">Hay una serpiente en mi bota</Error>
      </div>

      <div>
        <h2>Images</h2>

        <Image src="/logo-instacode.png" alt="Instacode Logo" />
        <Image size="s" src="/logo-instacode.png" alt="Instacode Logo" />
        <Image size="s" src="/logo-instacode-s.png" alt="Instacode Logo S" />
      </div>
    </div>
  );
};

export default StyleGuide;
