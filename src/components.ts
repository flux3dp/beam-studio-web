import SkipConnectMachine from 'app/pages/Skip-Connect-Machine';
import styled from 'styled-components';

export const SkipConnectMachineComponent = styled(SkipConnectMachine())`
  &.skip-connect-machine {
    padding: 0 0 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text-content {
        padding-bottom: 30px;
        font-size: 14px;
        letter-spacing: 0.1px;
        white-space: pre-wrap;
        color: #999999;
    }
    .btn-action {
        padding: 5px 15px;
    }
  }
`;
