import {Paper, PaperProps} from '@components/Paper';
import {FunctionComponent} from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled<
  FunctionComponent<PaperProps & {topSpacing?: number}>
>(Paper)`
  top: ${({topSpacing = 0}) => topSpacing}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 31px 0;
  min-height: 70px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const IconBack = styled.TouchableOpacity`
  margin: 0 17px;
  left: 5px;
`;

export const Items = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Notifications = styled.TouchableOpacity`
  justify-content: flex-end;
  right: 28px;
`;
