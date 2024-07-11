

import AdSectionWrapper from 'parts/AdSectionWrapper';
import Website from 'parts/Website';
import Imdb from 'parts/Imdb';
import Trailer from './Trailer';
import Play from 'parts/Play';

const MovieAdSection = ({
  websiteUrl,
  imdbId,
  videos
}) => (
  <AdSectionWrapper>
    <Website href={websiteUrl} />
    <Play href={"/play/"+imdbId} />
    <Imdb id={imdbId} />
    <Trailer videos={videos} />
  </AdSectionWrapper>
);

export default MovieAdSection;
