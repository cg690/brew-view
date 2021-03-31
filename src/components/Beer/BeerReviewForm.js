import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//import { Formik } from 'formik';

import { addBeer } from '../../actions';

import { 
  Slider,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
  Box,
  Stack,
  Textarea,
  Heading,
  Button
} from '@chakra-ui/react';





const BeerReviewForm = (props) => {
  const [smellRank, setSmellRank] = useState(0);
  const [smellText, setSmellText] = useState('');

  const [tasteRank, setTasteRank] = useState(0);
  const [tasteText, setTasteText] = useState('');

  const [feelRank, setFeelRank] = useState(0);
  const [feelText, setFeelText] = useState('');

  const [overallRank, setOverallRank] = useState(0);
  const [overallText, setOverallText] = useState('');


  useEffect(() => {
    if(props.review){
      setSmellRank(props.review.smellRank)
      setSmellText(props.review.smellText)
      setTasteRank(props.review.tasteRank)
      setTasteText(props.review.tasteText)
      setFeelRank(props.review.feelRank)
      setFeelText(props.review.feelText)
      setOverallRank(props.review.overallRank)
      setOverallText(props.review.overallText)
    }
  }, [props.review])


  

  const handleSubmit = (e) =>{
    e.preventDefault();

    const beer = {
      bid: props.beer.bid,
      name: props.beer.beer_name,
      brewery: {
        brewery_id: props.beer.brewery.brewery_id,
        brewery_name: props.beer.brewery.brewery_name,
        location: props.beer.brewery.location,
        label: props.beer.brewery.brewery_label
      },
      abv: props.beer.beer_abv,
      desription: props.beer.beer_description,
      label: props.beer.beer_label,
      style: props.beer.beer_style
    }

    const review = {
      smellRank,
      smellText,
      tasteRank,
      tasteText,
      feelRank,
      feelText,
      overallRank,
      overallText
    }

    props.addBeer({ beer, review }, props.beer.bid);
  }

  //console.log(results)

  return (
    <Stack w="100%" spacing={6}>
      <form onSubmit={handleSubmit}>
        <Box>
          <Heading color="white" size="lg">Smell:</Heading>
          <Slider flex='1' value={smellRank || 0} onChange={(val) => setSmellRank(val)} max={5} step={.25}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="30px" children={smellRank}/>
          </Slider>
          <Textarea
            value={smellText || ''}
            color="white"
            onChange={(e) => setSmellText(e.target.value)}
            placeholder="describe..."
            size="sm"
            resize="none"
          />
        </Box>

        <Box>
          <Heading color="white" size="lg">Taste:</Heading>
          <Slider flex='1' value={tasteRank || 0} onChange={(val) => setTasteRank(val)} max={5} step={.25}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="30px" children={tasteRank}/>
          </Slider>
          <Textarea
            value={tasteText || ''}
            color="white"
            onChange={(e) => setTasteText(e.target.value)}
            placeholder="describe..."
            size="sm"
            resize="none"
          />
        </Box>

        <Box>
          <Heading color="white" size="lg">Feel:</Heading>
          <Slider flex='1' value={feelRank || 0} onChange={(val) => setFeelRank(val)} max={5} step={.25}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="30px" children={feelRank}/>
          </Slider>
          <Textarea
            value={feelText || ''}
            color="white"
            onChange={(e) => setFeelText(e.target.value)}
            placeholder="describe..."
            size="sm"
            resize="none"
          />
        </Box>

        
        <Box>
          <Heading color="white" size="lg">Overall:</Heading>
          <Slider flex='1' value={overallRank || 0} onChange={(val) => setOverallRank(val)} max={5} step={.1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="30px" children={overallRank}/>
          </Slider>
          <Textarea
            value={overallText || ''}
            color="white"
            onChange={(e) => setOverallText(e.target.value)}
            placeholder="describe..."
            size="sm"
            resize="none"
          />
        </Box>

        <Button type="submit">
          submit
        </Button>
      </form>

    </Stack>
    
  )
}


export default connect(null, { addBeer })(BeerReviewForm);
