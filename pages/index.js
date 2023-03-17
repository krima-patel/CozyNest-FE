/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <>
      <div>
        <h1 className="welcome" style={{ marginTop: '40px' }}>Hey, {user.name}! What&#39;s Your Style?</h1>
        <p className="welcome"><b>Your Design Bio:</b> {user.bio}</p>
        <h5 className="design-intro">Here, you will find information about the most popular interior design styles. If you are new to interior design or even someone who is more experienced, the <i>What&#39;s Your Style</i> page will guide you or possibly inspire you! View the variety of styles, mix and match them, design as you please. Don&#39;t be afraid to try something new! Remember, you are the designer of your Cozy Nest, make sure it is uniquely yours.</h5>
      </div>
      <h1 className="design-names">Modern</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/modern1.png" alt="modern-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/modern2.png" alt="modern-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/modern3.png" alt="modern-home" />
        </div>
      </div>
      <div className="design-text">
        Modern interior design is similar to minimalism in many ways. It is all about a clean, sleek and uncluttered space. This style began in the 19th century with keeping decor a minimum and focusing on more industrial materials. It is challenging to create one definition for real modernism, but it is rooted in clean lines, solid colors and keeping simplicity at its core.
      </div>
      <h1 className="design-names">Minimalist</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/minimalism1.png" alt="minimalism-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/minimalism3.png" alt="minimalism-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/minimalism2.png" alt="minimalism-home" />
        </div>
      </div>
      <div className="design-text">It is all about the bare essentials with minimalism. Minimalists strip things down to their most basic form and can be applied to all aspects of life, including architecture and interior design. It&#39;s characterized by simplicity, clean lines, and a monochromatic palette with color used as an accent. With minimalism, you will see an open floor plan, lots of light, and functional furniture, and oftentimes a focus on shape, color and texture of just a handful of essential elements. It&#39;s all about keeping it simple.</div>
      <h1 className="design-names">Industrial</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/industrial1.png" alt="industrial-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/industrial2.png" alt="industrial-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/industrial3.png" alt="industrial-home" />
        </div>
      </div>
      <div className="design-text">Industrial design was inspired by factories built in the late 19th and early 20th century. The design style focuses on the long-lasting materials, such as brick, concrete, iron and steel. Many of the abandoned industrial buildings were turned into beautiful living spaces. The raw, almost unfinished materials from these time periods became focal points, creating a casual yet practical environment.</div>
      <h1 className="design-names">Contemporary</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/contemporary1.png" alt="contemporary-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/contemporary2.png" alt="contemporary-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/contemporary3.png" alt="contemporary-home" />
        </div>
      </div>
      <div className="design-text">The contemporary interior design style mixes the old with the new. It is all about finding balance and creating a timeless, classic ambience. Keep it simple with the flooring and wall colors, but learn to play with different pieces to create some drama to bring liveliness into the room.</div>
      <h1 className="design-names">Mid-Century Modern</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/midcentury1.png" alt="midcentury-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/midcentury2.png" alt="midcentury-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/midcentury3.png" alt="midcentury-home" />
        </div>
      </div>
      <div className="design-text">A design that became popular during the 1940s, is still prevalent today. Mid-century modern creates an organic, yet clean open feel. It is all about adding muted tones with bright colors, incorporating man-made materials into a modern space. This style allows for contrast to create a cohesive space.</div>
      <h1 className="design-names">Scandinavian</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/scandinavian1.png" alt="scandinavian-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/scandinavian3.png" alt="scandinavian-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/scandinavian2.png" alt="scandinavian-home" />
        </div>
      </div>
      <div className="design-text">A Scandinavian interior design style brings minimalism and coziness together, creating a true balance of each. Rising to popularity in the 20th century, this design style allowed for art to be at the forefront of any space. By creating a neutral toned space, the art is able to speak a thousand words. Designers love this style to this day and homeowners around the world love the elements of Scandinavian interior design and decor.</div>
      <h1 className="design-names">Bohemian</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/bohemian1.png" alt="bohemian-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/bohemian3.png" alt="bohemian-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/bohemian2.png" alt="bohemian-home" />
        </div>
      </div>
      <div className="design-text">Bohemian style or Boho decor is for those who love to bring life and culture from all over the world to their space. This is unlike the other interior design styles in that it allows for a colorful and full of life space. With a Bohemian space, you will often see warm, earthy colors, many textures and patterns. There are almost no rules to this style. If you are looking to create a truly unique space with no rules, this style is for you.</div>
      <h1 className="design-names">Transitional</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/transitional1.png" alt="transitional-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/transitional2.png" alt="transitional-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/transitional3.png" alt="transitional-home" />
        </div>
      </div>
      <div className="design-text">Transitional interior design is a mixture of the traditional and modern styles. Incorporating various design styles to create a unique space with adding contrasting elements together, it is all about bringing the classics in with the modern. This style will blend luxury with comfort, masculine and feminine, and antiques with new pieces. Transitional spaces will have neutral colors with occasional pops of color and functional furniture.</div>
      <h1 className="design-names">Hollywood Regency</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/hollywood1.png" alt="hollywood-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/hollywood2.png" alt="hollywood-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/hollywood3.png" alt="hollywood-home" />
        </div>
      </div>
      <div className="design-text">Hollywood Regency, also referred to as Hollywood Moderne, is all about boldness. This style allows for the use of bright, high contrast colors and ornate pieces, creating the feel of opulence and comfort. Hollywood Regency combines the styles of mid-century modern and art deco together. If you want a truly glamorous, over the top space with vibrancy, this will be the design style for you.</div>
      <h1 className="design-names">Traditional</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/traditional1.png" alt="traditional-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/traditional2.png" alt="traditional-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/traditional3.png" alt="traditional-home" />
        </div>
      </div>
      <div className="design-text">Traditional interior design is exactly as it sounds, it’s the classic warm and cozy feel that isn’t time or region specific. What makes this design unique to the others is the homey feeling it provides instead of a trend setting one. Rooms are set up to be functional, family-friendly, and comfortable with interiors that may include traditional architectural elements such as crown molding and wainscoting.</div>
      <h1 className="design-names">Mediterranean</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/mediterranean1.png" alt="mediterranean-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/mediterranean3.png" alt="mediterranean-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/mediterranean2.png" alt="mediterranean-home" />
        </div>
      </div>
      <div className="design-text">Mediterranean interior design style is characterized by the soft, romantic aesthetics of the Southern European countries. A Mediterranean space will encompass light and warm tones in color scheme, as well as incorporating the natural materials such as ceramics, wood, wrought iron and cotton. This style embodies calmness and relaxation. If you want a vacation-like ambience created in your home, this is the style for you.</div>
      <h1 className="design-names">Retro</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/retro1.png" alt="retro-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/retro2.png" alt="retro-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/retro3.png" alt="retro-home" />
        </div>
      </div>
      <div className="design-text">Retro interior design style is the perfect mixture of vintage and contemporary styles. This style was influenced by the postwar period in the 1960s with a new era of hope. Designers began taking more risks to create “funky” spaces. Expect lots of bold colors, fluent lines, layered textures, vintage accents.</div>
      <h1 className="design-names">Modern Farmhouse</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/farmhouse1.png" alt="farmhouse-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/farmhouse2.png" alt="farmhouse-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/farmhouse3.png" alt="farmhouse-home" />
        </div>
      </div>
      <div className="design-text">The modern farmhouse style is all about coziness with style and lots of mix and matching. You can add vintage pieces and pair them with stainless steel for an industrial, but modern feel. Stick to the natural elements, such as distressed wood to bring the classic farmhouse feel back into your space.</div>
      <h1 className="design-names">Coastal</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/coastal1.png" alt="coastal-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/coastal2.png" alt="coastal-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/coastal3.png" alt="coastal-home" />
        </div>
      </div>
      <div className="design-text">If you love for the ocean or long to be in its presence, the coastal interior design style is for you. It embodies peace and fun that you often feel near water. You can design in a coastal space in a variety of ways; it’s all about your interpretation of the outside world and how you want to bring it into your home. Oftentimes you will see neutral colors with shades of blue and green throughout and art pieces resembling the beauty of the ocean.</div>
      <h1 className="design-names">70s and 80s</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/decades1.png" alt="decades-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/decades2.png" alt="decades-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/decades3.png" alt="decades-home" />
        </div>
      </div>
      <div className="design-text">Everything old is new again. The 70s and 80s design style has been making a comeback in recent years. In contrast to some of the other design styles, this one will allow you to express yourself boldly. The 70s and 80s consisted of wall-to-wall carpeting, wood paneling, and parquet flooring; these are just the few trends from the past that are coming back to present day. Create a unique experience with this space by building on the elements from the past and make it your own.</div>
      <h1 className="design-names">Zen</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/zen1.png" alt="zen-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/zen2.png" alt="zen-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/zen3.png" alt="zen-home" />
        </div>
      </div>
      <div className="design-text">Inspired by East Asian cultures, Zen interior design is about creating harmony and balance in your home. A neutral color palette, natural textiles and textures, and using natural products creates a zen environment. A combination of these elements brings tranquility and serenity.</div>
      <h1 className="design-names">French Country</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/french1.png" alt="french-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/french2.png" alt="french-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/french3.png" alt="french-home" />
        </div>
      </div>
      <div className="design-text">French country combines European elegance with rustic elements. With a warm, neutral color scheme, soft patterns, and antique accents, such as weathered furniture, you can create a beautiful french country inspired space. This design style resembles a farmhouse aesthetic with ornate details, such as gilded mirrors and vases displayed throughout the space. If you are wanting to create a farmhouse inspired look with a twist, this is your go-to style.</div>
      <h1 className="design-names">Eclectic</h1>
      <div>
        <div className="column">
          <img className="design-images" src="/./images/eclectic1.png" alt="eclectic-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/eclectic2.png" alt="eclectic-home" />
        </div>
        <div className="column">
          <img className="design-images" src="/./images/eclectic3.png" alt="eclectic-home" />
        </div>
      </div>
      <div className="design-text">Eclectic style is one of those home decor with lots of nuance, which can be a fun style for many people. It is all about filling your home with personality and taking design risks. If you can’t decide on one particular style or you just don’t want to, or things are too matchy-matchy, this is the design approach to take. With eclecticism, you see mixtures of patterns, global influences, old and new elements, and unexpected decor which makes for a truly expressive space.</div>
    </>
  );
}

export default Home;
