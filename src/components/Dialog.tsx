import Dialog from 'app/views/dialogs/Dialog';
import styled from 'styled-components';

export default styled(Dialog)`
  &.dialog-container {
    position: absolute;
    .btn {
      margin-right: 5px;
    }
    .loading-background {
      position: fixed;
      z-index: 10000;
      width: 100%;
      height: 100%;
      display: flex;
      background-color: #f0f0f0;
    }
  }

  .prompt-dialog-container {
    display: block;
    background-color: #FFFFFF;
    padding: 0px 20px;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
    animation-duration: 0.3s;
    .caption {
        padding: 15px 0px;
        font-size: 12px;
        letter-spacing: 1.1px;
        color: #bbbbbb;
    }
    .text-input {
        width: 300px;
        border: 0px;
        border-bottom: 1px solid #cccccc;
        border-radius: 0px;
        font-size: 13px;
    }
    .button-group {
        width: 100%;
        padding: 10px 0px;
        display: flex;
        &.btn-right {
            justify-content: flex-end;
        }
        &.btn-center {
            justify-content: center;
        }
        &.btn-left {
            justify-content: flex-start;
        }
    }
    .btn-default {
        font-size: 13px;
        height: 29px;
        line-height: 25px;
    }
  }

  .modal-window {
    @include flexbox();
    background: rgba(0, 0, 0, .1);
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    &.no-background {
        position: fixed;
        background: none;
    }
    &.with-hole {
        position: fixed;
        background: none;
        pointer-events: none;
        .modal-background {
            //background-color: #ffaaff;
            opacity: 0.1;
            pointer-events: initial;
            position: absolute;
        }
        .modal-body {
            pointer-events: initial;
        }
    }

    .modal-background {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }

    .modal-body {
        @include flexbox();
        max-height: 100%;
    }

    .notification {
        width: 32.2rem;
        height: 25rem;
        background-color: #F8F8F8;
        position: relative;
        max-height: 100%;
        overflow: hidden;

        .modal-content {
            height: 80%;

            .wrapper {
                display:-webkit-box;
                -webkit-box-pack:center;
                -webkit-box-align:center;
                text-align: center;
            }

            h4 {
                margin: 0;
                font-size: 2em;
                color: #B3B3B3;
                display: inline-block;
            }

            span {
                font-size: 1.8em;
                color: #B3B3B3;
                display: inline-block;
                padding: 0 21px;
            }
        }

        .modal-actions {
            text-align: center;

            .btn {
                color: #B3B3B3;
                border: 1px solid #B3B3B3;
                width: 13rem;
                margin: 0 5px;
            }
        }
    }

    .modal-alert {
        @include flexbox();
        background: #F8F8F8;
        flex-direction: column;
        min-height: 100px;
        overflow: auto;
        padding: 1.6rem;
        position: relative;
        text-align: center;
        align-items: center;
        justify-content: space-between;
        width: 38.2rem;
        border-radius: 2px;
        box-shadow: 0 7px 15px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, 0.05);
        animation-duration: 0.3s;

        .caption {
            margin: 0 0 1.6rem 0;
            color: #626262;
        }

        .icon {
            height: 60px;
            margin: 0 0 15px 0;
        }

        .message {
            color: #333;
            margin: 0 0 20px 0;
            text-align: left;
            line-height: 1.4em;
            word-break: break-word;
            white-space: pre-wrap;
            text-align: center;

            a {
                font-size: 1em;
            }
        }

        .caption,
        .message {
            width: 100%;
        }
        .modal-checkbox {
            width: 100%;
            text-align: left;
            margin: 0 0 10px 0;
            font-size: 14px;
            input {
                margin: 0 5px 0 0;
            }
        }

        .alert-children {
            width: 100%;
            .hyper-link {
                font-size: 12px;
                cursor: pointer;
                color: #333333;
                text-decoration: underline;
                &.blue {
                    color: #1199cc;
                }
            }
            margin: 0 0 20px 0;
        }

        .btn {
            min-width: 50px;
        }

        .spinner-roller-reverse {

            background: linear-gradient(to right, #F0F0F0 10%, rgba(248, 248, 248, 0) 42%);

            &::before {
                background-color: #F8F8F8;
            }

            &::after {
                background-color: #F8F8F8;
            }
        }
        &.progress {
            width: unset;
            min-width: 120px;
            max-width: 600px;
            .caption {
                font-weight: bold;
            }
            .message {
                display: flex;
                justify-content: center;
            }
            .stepping-container {
                min-width: 350px;
                width: 100%;
            }
            .progress-message {
                margin: 16px 0;
            }
            .progress-bar {
                background: #ccc;
                height: 2rem;
                overflow: hidden;

                .current-progress {
                    background: #777;
                    content: "";
                    display: block;
                    height: 100%;
                    width: 0;
                }
            }
            .button-container {
                .btn-h-group {
                    padding: 0;
                }
                .btn-default {
                    height: 28px;
                    line-height: 24px;
                }
            }
        }
    }

    .message {
        font-family: "Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light", Helvetica, Arial, "Lucida Grande", sans-serif, "Microsoft JhengHei", "微軟正黑體";
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        word-break: break-all;
        word-wrap: break-word;
    }

    .btn-h-group {
        width: 100%;

        .btn {
            margin: 0 .6rem 0 0;

            &:last-child {
                margin: 0;
            }
        }
    }
  }
`;
