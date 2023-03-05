import React from 'react';
import Container from '../../components/Container';
import SubContainer from '../../components/SubContainer';
import SearchBar from '../../components/SearchBar';

//demo Data
import tables from '../../data/tables';
import FlatlistComp from '../../components/FlatListComp';
import Fab from '../../components/Fab';
import TableCard from '../../components/Table/TableCard';

const Index = () => {
  const renderTables = ({item}) => <TableCard item={item}></TableCard>;

  return (
    <Container>
      <SubContainer>
        <SearchBar placeholder="Search.."></SearchBar>
        <FlatlistComp
          DATA={tables}
          numberOfColumns={false}
          renderItem={renderTables}></FlatlistComp>
        <Fab icon="qrcode"></Fab>
      </SubContainer>
    </Container>
  );
};

export default Index;
