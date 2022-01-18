/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

type Card = {
  header: string;
  title: string[];
};

const Card: React.FC<{ cards: Card[] }> = ({ cards }) => {
  return (
    <>
      {cards.map((card, indexHeader) => (
        <View style={styles.card} key={indexHeader}>
          <Text style={styles.cardHeader}>{card.header}</Text>
          {card.title.map((content, indexBody) => (
            <Text style={styles.cardBody} key={indexBody}>
              {content}
            </Text>
          ))}
        </View>
      ))}
    </>
  );
};

export default Card;
