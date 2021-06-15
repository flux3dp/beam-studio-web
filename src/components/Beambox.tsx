import Beambox from 'app/pages/Beambox';
import styled from 'styled-components';

export default styled(Beambox())`
  &.studio-container {
    height: 100%;
    width: 100%;

    .btn-h-group {
      padding: 10px 0 10px 10px;

      .btn {
        margin: 0 0 0 10px;
      }
    }

    .top-menu-bar {
      height: 66px;
      letter-spacing: 0.3px;
      width: 100%;
    }

    .stage {
      height: 100%;
      position: relative;
    }

    .btn {
      margin-right: 5px;
    }

    .btn-primary {
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
    }

    .btn-primary:hover {
      color: #fff;
      background-color: #286090;
      border-color: #204d74;
    }

    .btn-success {
      color: #fff;
      background-color: #5cb85c;
      border-color: #4cae4c;
    }

    .btn-success:hover {
      color: #fff;
      background-color: #449d44;
      border-color: #398439;
    }

    .btn-info {
      color: #fff;
      background-color: #5bc0de;
      border-color: #46b8da;
    }

    .btn-info:hover {
      color: #fff;
      background-color: #31b0d5;
      border-color: #269abc;
    }

    .btn-warning {
      color: #fff;
      background-color: #f0ad4e;
      border-color: #eea236;
    }

    .btn-warning:hover {
      color: #fff;
      background-color: #ec971f;
      border-color: #d58512;
    }

    .btn-danger {
      color: #fff;
      background-color: #d9534f;
      border-color: #d43f3a;
    }

    .btn-danger:hover {
      color: #fff;
      background-color: #c9302c;
      border-color: #ac2925;
    }

    .preview-time-cost {
      position: fixed;
      color: #4d4d4d;
      bottom: 68px;
      right: 117px;
      font-weight: bold;
      text-align: right;
    }
  }

  &.beambox-studio {
    .left-toolbar {
      position: absolute;
      top: 40px;
      left: 0px;
      height: 100%;
      background: #f8f8f8;
      border: 1px solid #e0e0e0;
      border-width: 0 1px 1px 0;
      .tool-btn {
        text-align: center;
        line-height: 24px;
        filter: brightness(0);
        margin: 13px 6px 13px 7px;
        height: 30px;
        width: 36px;
        opacity: 0.5;
        &.active {
          opacity: 1;
        }
        &.disabled {
          opacity: 0.3;
        }
        &:not(.disabled) {
          cursor: pointer;
        }
        &:hover:not(.disabled) {
          opacity: 0.8;
        }
      }
    }


    #svg_editor {
      font-size: 10pt;
      position: absolute;
      color: #000;
      top: 40px;
      left: 50px;
      width: calc(100% - 50px - 258px);
      height: calc(100% - 40px);

      * {
        transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
      }

      g {
        cursor: move;
      }

      g.lock{
        cursor: default;
      }

      &.mac {
        width: calc(100% - 50px - 242px);
      }

      #workarea {
        position:absolute;
        text-align: center;
        border: none;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #f0f0f0;
        overflow: overlay;
        &:not(.mac) {
          overflow: hidden;
          &:hover {
            overflow: overlay;
          }
          &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 4px;
          }
          &::-webkit-scrollbar-corner {
            background-color: transparent;
          }
        }
        #svgcanvas {
          background: $backgroundColor;
          #rotaryAxis {
            #transparent {
              stroke-width: 5px;
            }
          }
        }
      }

      .right-panel-tabs {
        width: 100%;
        height: 40px;
        background-color: #f8f8f8;
        border: 1px solid #e0e0e0;
        border-width: 0px 0 1px 1px;
        display: flex;
        cursor: pointer;
        .tab {
          display: inline-flex;
          width: 32px;
          border: 1px solid #e0e0e0;
          border-width: 0 1px 0 0;
          transition: all 0.2s ease-in-out;
          &:last-of-type {
            border-width: 0;
          }
          .tab-icon {
            float: left;
            width: 24px;
            margin: 0 4px;
          }
          .tab-title {
            display: none;
            font-size: 12px;
            font-weight: bold;
            line-height: 38px;
            color: #333333;
            opacity: 0.8;
          }
          &.selected {
            width: calc(100% - 32px);
            background-color: #ffffff;
            .tab-title {
              display: block;
            }
          }
          &.disabled {
            opacity: 0.3;
          }
        }
      }

      #sidepanels {
        display: inline-block;
        bottom: 40px;
        border: none;
        position: fixed;
        background-color: #f8f8f8;
        width: 242px;
        padding: 0px;
        opacity: 1;
        overflow-x: visible;
        overflow-y: scroll;
        z-index: 2;
        top: 40px;
        height: calc(100% - 40px);
        right: 0;
        transition: opacity 0.3s;
        &.win {
          top: 70px;
          width: 258px;
          height: calc(100% - 70px);
        }
        &.linux {
          width: 258px;
        }
        &:hover {
          opacity: 1;
          z-index: 4;
        }
        #layer-and-laser-panel {
          width: 100%;
          min-height: calc(100% - 40px);
          background-color: #f8f8f8;
          border: 1px solid #e0e0e0;
          border-width: 0 0 1px 1px;
        }
        #layerpanel {
          background-color: #F0F0F0;
          display: block;
          overflow: initial;
          border: 1px $panelBorderColor solid;
          border-width: 0 0 1px 0;

          #layerbuttons {
            padding: 0;
            width: 100%;
            height: 20px;
            border: none;
            border-bottom: 1px solid #e0e0e0;
            .layer_button {
              font-size: 12px;
              padding: 3px 0;
              &:hover {
                background-color: #808080;
                color: white;
                cursor: pointer;
              }
            }
          }
          #layerlist {
            width: 100%;
            .layercolor {
              width: 24px;
              div {
                cursor: pointer;
                position: relative;
                border: 2px solid white;
                border-radius: 4px;
                background: black;
                width: 14px;
                height: 14px;
                margin-left: 10px;
              }
            }
            .layer {
              display: flex;
              flex-direction: column;
              align-items: center;
              min-height: 40px;
              border: 1px solid #ffffff;
              border-width: 0 0 0 5px;
              &:hover {
                color: black;
                background-color: #dddddd;
                border-color: #dddddd;
              }
              .vis-icon {
                filter: brightness(0);
              }
              .layer-row {
                width: 100%;
                display: flex;
                align-items: center;
                min-height: 30px;
              }
              .drag-sensor-area {
                width: 100%;
                height: 5px;
              }
              .layername {
                width: 140px;
                padding: 3px 0px;
                margin-left: 5px;
                text-align: center;
                cursor: pointer;
              }
              &.layersel {
                color: white;
                background-color: #444444;
                border-color: #444444;
                font-weight: normal;
                &:hover:not(.current) {
                  color: white;
                  background-color: #444;
                  border-color: #444444;
                }
                &.current {
                  border-color: #0091ff;
                }
                .vis-icon {
                  filter: brightness(0) invert(1);
                }
              }
              .layervis {
                display: flex;
                align-items: center;
                width: 24px;
                height: 25px;
                text-align: center;
                margin: 0 0 0 5px;
                cursor: pointer;
              }
              .layerlock {
                width: 24px;
                margin: 0 5px 0 0;
                cursor: pointer;
                img {
                  display: none;
                  filter: brightness(0%);
                }
              }
              &.layersel .layerlock {
                img {
                  filter: brightness(0%) invert(100%);
                }
              }
              &.lock .layerlock {
                img {
                  display: block;
                }
              }

              &.mark,
              &.mark:hover {
                color: white;
                border: 1px solid #666 !important;
                background-color: #666 !important;
                font-weight: normal;
              }
            }
            .drag-bar {
              width: 100%;
              height: 2px;
              background-color: #0091ff;
            }
          }

          #drag-image {
            position: absolute;
            z-index: -1;
            width: 100%;
            background-color: transparent;
            .layer-back {
              position: absolute;
              width: 100%;
              height: 40px;
              background-color: #444;
              border: 1px solid #fff;
            }
            .layercolor {
              width: 24px;
              div {
                cursor: pointer;
                position: relative;
                border: 2px solid white;
                border-radius: 4px;
                background: black;
                width: 14px;
                height: 14px;
                margin-left: 10px;
              }
            }
            .layervis {
              text-align: center;
              margin: 0 5px;
              &.layerinvis {
                i {
                  display: none;
                }
              }
            }
            .layer {
              position: absolute;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              min-height: 40px;
              color: white;
              background-color: #444;
              border: 1px solid #fff;
              font-weight: normal;
              .layer-row {
                display: flex;
                align-items: center;
                min-height: 30px;
              }
              .drag-sensor-area {
                width: 100%;
                height: 5px;
              }
              .layername {
                width: 150px;
                padding: 3px 0px;
                margin-left: 10px;
                text-align: center;
              }
              .layerlock {
                width: 14px;
                margin: 0 5px;
                cursor: pointer;
                img {
                  display: none;
                  height: 13px;
                  filter: brightness(0%);
                }
              }
              &.layersel .layerlock {
                img {
                  filter: brightness(0%) invert(100%);
                }
              }
              &.lock .layerlock {
                img {
                  display: block;
                }
              }
              &.mark,
              &.mark:hover {
                color: white;
                border: 1px solid #666 !important;
                background-color: #666 !important;
                font-weight: normal;
              }
            }
          }
          .react-contextmenu {
            display: none;
          }
          .react-contextmenu--visible {
            z-index: 1;
            display: unset;
            background-color: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.33);
            border-radius: 4px;
            padding: 5px 0px;
            &:focus {
              outline: none;
            }

            .react-contextmenu-item {
              padding: 0px 20px;
              line-height: 20px;
              height: 20px;
              font-size: 12px;
              &:hover:not(.react-contextmenu-item--disabled) {
                color: #ffffff;
                background-color: #2e5dea;
              }
              &.react-contextmenu-item--disabled {
                opacity: 0.3;
                &:focus {
                  outline: none;
                }
              }
            }
          }
        }
        #layerlist_container {
          position: relative;
          overflow-x: hidden;
          overflow-y: scroll;
          background: white;
          height: 240px;
        }
        .add-layer-btn {
          position: absolute;
          cursor: pointer;
          top: 215px;
          right: 20px;
          width: 13px;
          height: 13px;
          .bar {
            position: absolute;
            border: 1px solid #ffffff;
            width: 4px;
            height: 13px;
            border-radius: 2px;
            background-color: #444444;
          }
          .bar1 {
            transform: translateX(4.5px);
          }
          .bar2 {
            left: 2px;
            transform: translateX(13px) rotate(90deg) translateX(4.5px);
          }
          .bar3 {
            width: 2px;
            height: 11px;
            border: 1px solid #444444;
            border-radius: 1px;
            transform: translateX(5.5px) translateY(1px);
          }
        }
        #sidepanel_handle {
          display: none;
          visibility: hidden;
          width: 0;
          height: 0;
          margin: 0;
          padding: 0;
          border: none;
          opacity: 0;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        #object-panel {
          width: 100%;
          min-height: calc(100% - 40px);
          background-color: #f8f8f8;
          border: 1px solid #e0e0e0;
          border-width: 0 0 1px 1px;
          .ui-control-unit-input-v2 {
            height: 25px;
            line-height: 25px;
            margin: 10px 0;
            border: solid #e0e0e0;
            border-width: 0 0 1px 0;
            input {
              width: 40px;
              height: 25px;
              font-size: 12px;
              padding: 1px 18px 1px 1px;
              border: none;
              background-color: unset;
              color: #333333;
            }
            .unit {
              margin-left: -16px;
              font-size: 9px;
              color: #bbbbbb;
            }
          }
          .tool-btns-row {
            height: 41px;
            background-color: #ffffff;
            border: solid #e0e0e0;
            border-width: 0 0 1px 0;
            .half-row {
              width: 50%;
              height: 100%;
              padding: 0 8px;
            }
            .left {
              float: left;
              padding-left: 12px;
              border: solid rgba(0, 0, 0, 0);
              border-width: 0 1px 0 0;
              &.sep {
                border: solid #e0e0e0;
                border-width: 0 1px 0 0;
              }
            }
            .right {
              float: right;
              padding-right: 12px;
            }
            .tool-btn {
              width: 25%;
              height: 100%;
              display: inline-flex;
              justify-content: center;
              opacity: 0.7;
              &.disabled {
                opacity: 0.3;
              }
              &:hover:not(.disabled) {
                opacity: 1;
              }
              img {
                width: 24px;
              }
            }
          }
          .dimension-panel {
            width: 100%;
            height: 91px;
            padding: 0 9px 0 12px;
            border: 1px solid #e0e0e0;
            border-width: 0 0 1px 0;
            display: flex;
            flex-wrap: wrap;
            .dimension-container {
              display: inline-flex;
              width: 33%;
              height: 45px;
              padding: 0 0px 0 4px;
              .label {
                width: 16px;
                line-height: 45px;
                font-size: 9px;
                color: #777777;
                &.img {
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  img {
                    width: 10px;
                    margin-right: 6px;
                    filter: brightness(0);
                    opacity: 0.65;
                  }
                }
              }
              input {
                width: 50px;
              }
            }
            .dimension-lock {
              display: inline-flex;
              width: 16px;
              margin: 0 0 0 4px;
              img {
                opacity: 0.5;
                &:hover {
                  opacity: 1;
                }
              }
            }
            .flip-btn-container {
              display: flex;
              justify-content: flex-end;
              width: calc(33% - 20px);
              height: 45px;
              .tool-btn {
                width: 24px;
                height: 100%;
                display: inline-flex;
                justify-content: center;
                opacity: 0.7;
                &.disabled {
                  opacity: 0.3;
                }
                &:hover:not(.disabled) {
                  opacity: 1;
                }
                img {
                  width: 24px;
                }
              }
            }
          }
          .options-panel {
            padding: 0 16px 5px 16px;
            border: 1px solid #e0e0e0;
            border-width: 0 0 1px 0;
            transition: height 0.1s ease-in 0s;
            .title {
              width: 100%;
              padding: 10px 0;
              color: #aaaaaa;
              font-size: 9px;
              letter-spacing: 2px;
            }
            .option-block {
              margin: 7px 0;
              display: inline-flex;
              width: 100%;
              justify-content: space-between;
              .label {
                font-size: 12px;
                height: 20px;
                line-height: 20px;
                font-weight: 600;
                color: #333333;
              }
              .option-input {
                width: 40px;
                height: 20px;
                line-height: 20px;
                margin: 0px;
                input {
                  height: 20px;
                }
              }
              .select-container {
                width: 140px;
                select {
                  font-size: 12px;
                  padding: 0 10px 0 5px;
                  border-radius: 0px;
                  margin: 0;
                  line-height: 19px;
                  &.no-triangle {
                    background-image: none;
                  }
                }
                .font-react-select-container {
                  .react-select__control {
                    min-height: unset;
                    padding: 0 0 0 5px;
                    background-image: url("../img/icon-3d-arrow-down.png");
                    background-repeat: no-repeat;
                    background-color: transparent;
                    background-position: calc(100% - 4px) center;
                    background-size: 8px 8px;
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                    border-color: #e0e0e0;
                    font-size: 12px;
                    line-height: 19px;
                    &.react-select__control--is-focused {
                      border-radius: 1px;
                    }
                  }
                  .react-select__value-container {
                    padding: 0;
                    height: 19px;
                    .react-select__single-value {
                      max-width: calc(100% - 12px);
                      margin: 0;
                      letter-spacing: 0.3px;
                    }
                    .react-select__input {
                      input {
                        height: 19px;
                      }
                    }
                  }
                  .react-select__indicators {
                    display: none;
                  }
                  .react-select__option {
                    font-size: 12px;
                  }
                  &.no-triangle {
                    .react-select__control {
                      background-image: none;
                    }
                  }
                }
              }
              .onoffswitch {
                width: 26px;
                margin: 3px 0;
                &.partially-filled {
                  opacity: 0.7;
                }
                .onoffswitch-label {
                  height: 14px;
                  border: none;
                  border-radius: 7px;
                }
                .onoffswitch-switch {
                  right: 12px;
                  width: 10px;
                  height: 10px;
                  border: none;
                  border-radius: 5px;
                  margin: 2px;
                  transition: all 0.1s ease-in 0s;
                }
                .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
                  right: 0;
                }
                .onoffswitch-inner {
                  transition: margin 0.1s ease-in 0s;
                  &::before {
                    background-color: #0091ff;
                  }
                }
              }
              .threshold-slider {
                width: 100%;
                &::-webkit-slider-thumb {
                  width: 15px;
                  height: 15px;
                  border-radius: 7.5px;
                  background-color: #fdfdfd;
                  border: none;
                  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
                }
                &::-webkit-slider-runnable-track {
                  height: 6px;
                  border-radius: 25px;
                  border: 1px solid #ededed;
                  background-blend-mode: overlay, normal;
                  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
                    linear-gradient(to right, #333333, #ffffff);
                }
              }
              &.with-slider {
                margin-bottom: 0;
              }
              &.slider-container {
                margin-top: 0;
              }
            }
          }
          .actions-panel {
            padding: 0 16px 5px 16px;
            transition: height 0.1s ease-in 0s;
            .title {
              width: 100%;
              padding: 10px 0;
              color: #aaaaaa;
              font-size: 9px;
              letter-spacing: 2px;
            }
            .btns-container {
              width: 100%;
              display: inline-flex;
              flex-wrap: wrap;
              justify-content: space-between;
              .btn-container {
                width: 100%;
                &.half {
                  width: calc(50% - 4.5px);
                }
              }
              .btn {
                width: 100%;
                height: 20px;
                padding: 0;
                margin: 6px 0;
                border: 1px solid #e0e0e0;
                font-size: 12px;
                line-height: 20px;
                color: rgba(0, 0, 0, 0.8);
                background-color: #fefefe;
                &.disabled {
                  &:hover {
                    box-shadow: none;
                  }
                }
              }
            }
          }
        }
        #pathedit-panel {
          width: 100%;
          min-height: calc(100% - 40px);
          background-color: #f8f8f8;
          border: 1px solid #e0e0e0;
          border-width: 0 0 1px 1px;

          .node-type-panel {
            padding: 0 16px 5px 16px;
            transition: height 0.1s ease-in 0s;
            .title {
              width: 100%;
              padding: 10px 0;
              color: #aaaaaa;
              font-size: 9px;
              letter-spacing: 2px;
            }
          }
        }
        .btn-go {
          background: #4d4d4d;
          font-size: 23px;
          width: $sidePanelWidth;
          height: 100px;
          border: 1px solid #333;
          position: absolute;
          bottom: 0;
          right: 0;
          color: white;
        }
      }
      .selLayerBlock {
        background: #f8f8f8;
        padding: 15px;
        margin-top: -1px;
        #selLayerNames {
          background-color: #ffffff;
          height: 30px;
          width: 100%;
          padding: 0 0 0 10px;
          background-position: calc(100% - 4px);
          cursor: pointer;
        }
        #selLayerLabel {
          margin: -15px -15px 15px -15px;
          display: block;
          padding: 10px 15px;
          background: #f2f2f2;
          border-bottom: 1px #e0e0e0 solid;
          color: #333;
          font-weight: bold;
        }
      }
      #laser-panel,
      #layer-laser-panel-placeholder {
        background-color: #f8f8f8;
        height: 100%;
        margin-top: -1px;
        border: 1px $panelBorderColor solid;
        border-width: 1px 0 0 0;
        border-radius: 4px;
        .layername {
          line-height: 20px;
          padding: 10px 15px;
          background: #f2f2f2;
          border-bottom: 1px $panelBorderColor solid;
          text-align: left;
          color: #333;
          font-weight: bold;
        }
        .layerparams {
          padding: 10px 3px;
          .layer-param-buttons {
            height: 25px;
            margin: 0 15px 5px;
            display: flex;
            justify-content: space-between;
            .left {
              display: flex;
              align-items: center;
            }
            .right {
              display: flex;
              align-items: center;
            }
          }
          .icon-button {
            width: 24px;
            height: 24px;
            opacity: 0.5;
            &:not(:first-child) {
              margin-left: 10px;
            }
            &:hover:not(.disabled) {
              opacity: 1;
            }
            &.disabled {
              opacity: 0.3;
            }
            img {
              filter: brightness(0);
            }
          }
        }
        .addon-block {
          .label {
            height: 40px;
            line-height: 20px;
            padding: 10px 15px;
            background: #f2f2f2;
            border: 1px $panelBorderColor solid;
            border-width: 1px 0;
            text-align: left;
            color: #333;
            font-weight: bold;
          }
          .addon-setting {
            padding: 10px 3px;
          }
        }
        .preset-dropdown-containter {
          display: flex;
          margin: 0 15px 0 0;
          justify-content: space-between;
          align-items: center;
          .controls {
            width: calc(100% - 35px);
          }
        }
        .add-preset-btn {
          cursor: pointer;
          width: 24px;
          height: 24px;
          opacity: 0.5;
          &:hover:not(.disabled) {
            opacity: 1;
          }
          &.disabled {
            opacity: 0.3;
            cursor: default;
          }
          img {
            filter: brightness(0);
          }
          .bar {
            position: absolute;
            width: 2px;
            height: 14px;
            border-radius: 1px;
            border: 1px solid #000000;
            background-color: #000000;
          }
          .bar1 {
            transform: translateX(6px);
          }
          .bar2 {
            transform: translateX(14px) rotate(90deg) translateX(6px);
          }
        }
        .panel {
          margin-top: 20px;
          padding-left: 20px;
          padding-right: 20px;
          clear: both;
          .ui.ui-control-unit-input-v2 {
            width: 80px;
            float: right;
            input {
              width: 100%;
              height: 30px;
              padding: 1px 1px 0px;
              outline: none;
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-width: 0 0 1px 0;
              border-radius: 0;
              background-color: unset;
            }
            .unit {
              width: 25px;
              font-size: 9px;
              margin-left: -25px;
              text-align: right;
              color: rgba(0, 0, 0, 0.25);
            }
          }
          .title {
            line-height: 32px;
          }
          &.without-drag {
            height: 32px;
            .title {
              line-height: 32px;
            }
          }
          &.checkbox {
            height: 16px;
            .title {
              line-height: 16px;
            }
            input {
              float: right;
              margin-top: 2px;
              margin-right: 10%;
            }
          }
          .speed-warning {
            display: flex;
            margin-top: 15px;
            .warning-icon {
              width: 20px;
              height: 20px;
              border: 1px solid #333333;
              border-radius: 10px;
              line-height: 18px;
              text-align: center;
            }
            .warning-text {
              width: calc(100% - 20px);
              padding-left: 8px;
              font-size: 12px;
            }
          }
        }

        .rainbow-slider {
          margin: 6px 0;
          width: 100%;
          -webkit-appearance: none;
          &::-webkit-slider-thumb {
            width: 15px;
            height: 15px;
            border-radius: 7.5px;
            background-color: #fdfdfd;
            border: none;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
          }
          &::-webkit-slider-runnable-track {
            height: 18px;
            border-radius: 25px;
            border: 1px solid #ededed;
            background-blend-mode: overlay, normal;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
              linear-gradient(to right, #89d307, #9ede05 59%, #fff600 71%, #c50101);
          }
          &.speed-for-vector {
            &::-webkit-slider-runnable-track {
              background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
                linear-gradient(to right, #89d307 0%, #9ede05 2%, #fff600 4%, #c50101 6%);
            }
          }
          &.hide-thumb {
            &::-webkit-slider-thumb {
              opacity: 0;
            }
          }
        }

        .controls {
          overflow: hidden;

          .control {
            line-height: 0;
            width: 100%;
          }
          .label {
            font-size: 10pt;
            color: #000;
            line-height: 16px;
            padding-left: 10px;
          }
          .dropdown-container {
            position: static;
            width: 100%;

            :focus {
              outline: none;
            }

            select {
              background-color: #fff;
              font-size: 10pt;
              color: #000;
              width: calc(100% - 29px);
              margin: 5px 0 5px 15px;
            }
            &.more-than-one {
              select {
                background-image: url("../img/icon-3d-arrow-down.png");
                background-position: calc(100% - 4px) center;
                background-repeat: no-repeat;
                background-size: 8px 8px;
              }
            }
          }
        }

        .more-config-panel {
          box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          background: #fff;
          padding: 20px 20px 0;
          width: 680px;

          .title {
            color: #626262;
            font-size: 15px;
            font-weight: 600;
            line-height: 18px;
          }
          .config-list-columns {
            width: 100%;
            margin-top: 15px;
            display: inline-flex;
          }

          .operation-buttons {
            width: 10%;
            font-size: 16px;
            color: #e0e0df;
            padding-top: 58px;
            .operation-button {
              text-align: center;
              margin-top: 10px;
              margin-bottom: 10px;
              &:hover {
                color: #888888;
              }
            }
          }
          .config-list-column {
            width: 45%;
            .title {
              display: inline-flex;
              color: #888888;
              font-weight: 500;
            }
            .add-btn {
              cursor: pointer;
              margin: 2px 0 3px 10px;
              .bar {
                position: absolute;
                border: 1px solid #ffffff;
                width: 4px;
                height: 13px;
                border-radius: 2px;
                background-color: #888888;
              }
              .bar1 {
                transform: translateX(4.5px);
              }
              .bar2 {
                transform: translateX(13px) rotate(90deg) translateX(4.5px);
              }
              .bar3 {
                width: 2px;
                height: 11px;
                border: 1px solid #888888;
                border-radius: 1px;
                transform: translateX(5.5px) translateY(1px);
              }
              &:hover {
                .bar {
                  background-color: #444444;
                }
                .bar3 {
                  border: 1px solid #444444;
                }
              }
            }
          }
          .config-list {
            margin-top: 10px;
            border: 2px solid #e0e0df;
            height: 160px;
            overflow-y: auto;

            .config-entry {
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #e0e0df;
              color: $primaryColor;
              cursor: pointer;
              line-height: 20px;
              overflow-x: scroll;
              &::-webkit-scrollbar {
                display: none;
              }
              .entry-name {
                height: 19px;
                margin-left: 10px;
                float: left;
              }
              .sub-text {
                height: 19px;
                margin-left: 0px;
                margin-right: 5px;
                float: right;
                font-style: italic;
                font-size: 10px;
                font-weight: 300;
              }
              &.no-border {
                border-bottom: 0px;
              }
            }
            .selected {
              background-color: #e0e0e0;
              color: #555;
            }
          }

          .config-name {
            margin: 20px 0 10px 0;
            height: 21px;
            line-height: 21px;
            font-size: 15px;
            font-weight: bold;
            color: #888888;
          }

          .controls {
            padding: 0 0 10px 0;
            display: flex;
            justify-content: space-between;
            &.disable {
              opacity: 0.5;
            }
            .controls-column {
              width: 45%;
            }

            .control {
              color: #888;
              display: flex;
              font-size: 13px;
              height: 40px;
              align-items: center;
              justify-content: space-between;

              .label {
                font-size: 13px;
                text-transform: uppercase;
                color: #888;
                line-height: 1em;
                width: 100px;
                align-self: center;
              }
              .ui-control-unit-input-v2 {
                margin: 0px 0px 0px 5px;
                width: 90px;
                input {
                  height: 28px;
                  width: 100%;
                  font-size: 13px;
                  padding: 3px 0px 3px 5px;
                }
                .unit {
                  margin-left: -40px;
                }
              }
              .value-text {
                width: 120px;
                margin: 5px 0 5px 2px;
                padding: 0 5px;

                &::after {
                  content: attr(data-tail);
                }
              }
            }
          }

          .form {
            margin: 0 0 10px 0;
          }

          .footer {
            border: none;
            border-top: 1px solid #ccc;
            position: static;
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;

            div {
              line-height: 10px;
            }

            .right {
              float: right;
              padding: 10px 0;
              .btn:last-child {
                margin: 0;
              }
            }

            .left {
              float: left;
              padding: 10px 0;
              .btn:first-child {
                margin: 0;
              }
            }

            .btn {
              font-size: 15px;
              line-height: 30px;
              margin: 0 10px 0 0;
            }
          }
        }

        .save-config-panel {
          box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          background: #fff;
          padding: 20px 20px 0;
          width: 440px;

          .title {
            color: #626262;
            font-size: 15px;
            font-weight: 600;
            line-height: 18px;
          }

          .name {
            color: #909090;
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;

            span {
              flex: 1;
            }

            input {
              border: 2px solid #ccc;
              flex: 2;
              padding: 3px;
              margin-left: 30px;
            }
          }

          .form {
            margin: 0 0 10px 0;
          }

          .footer {
            padding: 10px 0;
            border: none;
            border-top: 1px solid #ccc;
            position: static;

            .btn {
              margin: 0;
              min-width: 40px;
              line-height: 30px;
              flex: initial;

              &.btn-apply {
                margin: 0;
              }
            }
          }
        }

        .custom-presets-wrapper {
          background: #fff;
          overflow: scroll;
          padding: 0 20px;
          width: 440px;

          .custom-presets-list {
            border: 2px solid $backgroundColor;
            height: 110px;
            list-style: none;
            overflow: scroll;
            padding: 0;

            &:empty {
              display: flex;
              background: $primaryColor;
              color: $backgroundColor;
              align-items: center;
              justify-content: center;

              &::after {
                content: attr(data-empty-message);
              }
            }

            input[type="radio"] {
              display: none;

              &:checked + .preset-item-name {
                background-color: #e0e0e0;
                color: #fff;
                i {
                  visibility: visible;
                }
              }
            }

            .preset-item-name {
              border-bottom: 1px solid $backgroundColor;
              color: $primaryColor;
              cursor: pointer;
              height: 40px;
              line-height: 40px;
              margin: 0;
              padding: 0 0 0 10px;
              i {
                float: right;
                visibility: hidden;
              }
            }
          }

          .custom-preset-buttons {
            height: 69px;
            position: static;
            justify-content: flex-end;

            .btn-default {
              border-radius: 0;
              font-size: 15px;
              height: 30px;
              line-height: 26px;
              min-width: 66px;
            }
          }
        }
      }

      #rulers {
        pointer-events: none;
        position: absolute;
        z-index: 1;
        width: calc(100vw - 308px);
        height: 100vh;
        &.mac {
          width: calc(100vw - 292px);
        }
        div {
          position: absolute;
          background: #f0f0f0;
          overflow: hidden;
        }
        #ruler_corner {
          top: 0px;
          width: 15px;
          height: 15px;
        }
        #ruler_x {
          pointer-events: initial;
          top: 0px;
          left: 15px;
          right: 0px;
          height: 15px;
          border-bottom: 1px solid;
          border-left: 1px solid #777;
          canvas {
            pointer-events: none;
            margin-left: -16px;
          }
        }
        #ruler_y {
          pointer-events: initial;
          top: 15px;
          bottom: 0px;
          left: 0px;
          width: 15px;
          border-right: 1px solid;
          border-top: 1px solid #777;
          canvas {
            pointer-events: none;
            margin-top: -17px;
          }
        }
        #ruler_unit_shower {
          top: 0px;
          right: 0px;
          height: 15px;
          border-bottom: 1px solid #000;
          color: #333;
          font-size: 12px;
          font-weight: 300;
        }
      }

      #main_button {
        position: absolute;
        top: 4px;
        left: 5px;
        z-index: 5;
      }

      #main_button,
      #tools_left,
      #tools_bottom {
        display: none;
        visibility: hidden;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        border: none;
        opacity: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      #tools_top {
        right: 2px;
        top: 2px;
        border-bottom: none;
        overflow: auto;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 1px;
        height: 1px;
        opacity: 0;
        z-index: 91;
        line-height: 26px;
        background: #F0F0F0;
        // if display: none, text mode will break.
        // this is just a quick workaround. maybe using @include force-hide() is more beautiful.

        .tool_sep {
          margin-top: 5px;
        }

        div[id$="_panel"]:not(#editor_panel):not(#history_panel) {
          display: none;
        }

        & > div {
          line-height: 26px;

          & > * {
            float: left;
            margin-right: 2px;
          }
        }

        label {
          margin-top: 0;
          margin-left: 5px;
        }

        input {
          margin-top: 5px;
          height: 15px;
        }
      }

      #cur_context_panel {
        position: absolute;
        top: 87px;
        left: 56px;
        line-height: 22px;
        overflow: auto;
        padding-left: 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.8);
        color: #ccc;
        padding: 0 10px;
        border-radius: 0 0 3px 0;

        a {
          float: none;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      }

      #tools_left {
        position: absolute;
        border-right: none;
        top: 40px;
        left: 1px;
        z-index: 4;
        display: none;
        visibility: hidden;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        border: none;
        opacity: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .tool_button {
          position: relative;
          z-index: 11;
        }
      }

      #tools_bottom {
        position: absolute;
        left: 40px;
        right: 0;
        bottom: 0;
        overflow: visible;
        display: none;
        visibility: hidden;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        border: none;
        opacity: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        input[type=text] {
          width: 2.2em;
        }

        #tools_bottom_2 {
          .dropdown {
            button {
              margin-top: 2px;
            }
          }
        }
      }

      #option_lists {
        ul {
          display: none;
          position: absolute;
          height: auto;
          z-index: 3;
          margin: -10px;
          list-style: none;
          padding-left: 0;

          li {
            margin: 0;
            border-radius: 0;
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
          }
        }

        .optcols2 {
          width: 70px;
          margin-left: -15px;
        }

        .optcols3 {
          width: 90px;
          margin-left: -31px;
        }

        .optcols4 {
          width: 130px;
          margin-left: -44px;
        }

        ul[class^=optcols] {
          li {
            float: left;
          }
        }
      }

      #color_picker {
        position: absolute;
        display: none;
        background: #E8E8E8;
        height: 350px;
        z-index: 5;
      }

      .tools_flyout {
        position: absolute;
        display: none;
        cursor: pointer;
        width: 400px;
        z-index: 1;
      }
    }

    #svg_source_editor {
      display: none;
      visibility: hidden;
      width: 0;
      height: 0;
      margin: 0;
      padding: 0;
      border: none;
      opacity: 0;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      #svg_source_container {
        position: absolute;
        top: 30px;
        left: 30px;
        right: 30px;
        bottom: 30px;
        background-color: #B0B0B0;
        opacity: 1.0;
        text-align: center;
        border: 1px outset #777;
        z-index: 6;
      }

      form {
        position: absolute;
        top: 40px;
        bottom: 30px;
        width: 100%;
      }

      #svg_source_textarea {
        position: relative;
        width: 95%;
        height: 95%;
        padding: 5px;
        font-size: 12px;
      }

      #tool_source_back {
        text-align: left;
        padding-left: 20px;
      }
    }

    #svg_docprops {
      display: none;

      #svg_docprops_container {
        position: absolute;
        top: 50px;
        padding: 10px;
        background-color: #B0B0B0;
        border: 1px outset #777;
        opacity: 1.0;
        font-size: .8em;
        z-index: 20001;
      }

      .error {
        border: 1px solid red;
        padding: 3px;
      }

      #resolution {
        max-width: 14em;
      }

      legend {
        max-width: 195px;
      }
    }

    #svg_prefs {
      display: none;
      visibility: hidden;
      width: 0;
      height: 0;
      margin: 0;
      padding: 0;
      border: none;
      opacity: 0;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      #svg_prefs_container {
        position: absolute;
        top: 50px;
        padding: 10px;
        background-color: #B0B0B0;
        border: 1px outset #777;
        opacity: 1.0;
        font-size: .8em;
        z-index: 20001;
      }

      legend {
        max-width: 195px;
      }

      fieldset {
        padding: 5px;
        margin: 5px;
        border: 1px solid #DDD;
      }

      button {
        margin-top: 0;
        margin-bottom: 5px;
      }
    }

    #dialog_box {
      .overlay {
        opacity: 0.1;
      }
      #dialog_container {
        display: none;
        color: #626262;
        border-radius: 0;
        border: none;
        background-color: #f8f8f8;
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
        padding: 18px;
        height: initial;
        width: 400px;
        margin-left: -200px;
        #dialog_content {
          font-size: 18px;
          margin: 0;
          margin-bottom: 10px;
          background-color: unset;
          border: none;
          height: initial;
        }
        #dialog_buttons {
          input[type="text"] {
            font-size: 16px;
            padding-left: 10px;
          }
          input[type="button"] {
            font-size: 1.3rem;
            padding: 6px 12px;
            margin-top: 10px;
            background-color: unset;
            color: #c0c0c0;
            border: 2px solid #c0c0c0;
            &:hover {
              border: 2px solid #424242;
              color: #424242;
            }
            &:focus {
              outline: 0;
            }
          }
        }
      }
    }

    .contextMenu {
      position: absolute;
      z-index: 99999;
      border: solid 1px rgba(0,0,0,.33);
      background: rgba(255,255,255,.95);
      padding: 5px 0;
      margin: 0px;
      display: none;
      font: 12px/15px Lucida Sans, Helvetica, Verdana, sans-serif;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -moz-box-shadow: 2px 5px 10px rgba(0,0,0,.3);
      -webkit-box-shadow: 2px 5px 10px rgba(0,0,0,.3);
      box-shadow: 2px 5px 10px rgba(0,0,0,.3);
    }

    .contextMenu LI {
      list-style: none;
      padding: 0px;
      margin: 0px;
    }

    .contextMenu .shortcut {
      width: 115px;
      text-align:right;
      float:right;
    }

    .contextMenu A {
      -moz-user-select: none;
      -webkit-user-select: none;
      color: #222;
      text-decoration: none;
      display: block;
      line-height: 20px;
      height: 20px;
      background-position: 6px center;
      background-repeat: no-repeat;
      outline: none;
      padding: 0px 15px 1px 20px;
    }

    .contextMenu LI.hover A {
      background-color: #2e5dea;
      color: white;
      cursor: default;
    }

    .contextMenu LI.disabled A {
      color: #999;
    }

    .contextMenu LI.hover.disabled A {
      background-color: transparent;
    }

    .contextMenu LI.separator {
      border-top: solid 1px #E3E3E3;
      padding-top: 5px;
      margin-top: 5px;
    }

    #image-trace-panel-placeholder {
      position: absolute;
      top: 1000px;
    }

    .time-est-btn-container {
      position: absolute;
      z-index: 1;
      bottom: 10px;
      right: 242px;
      margin-right: 5px;
      &.not-mac {
          right: 258px;
      }
      .time-est-btn {
          cursor: pointer;
          width: 36px;
          height: 36px;
          padding: 7px 7px 8px 9px;
          border-radius: 18px;
          background-color: #999999;
          img {
              height: 20px;
              filter: brightness(0) invert(1);
          }
      }
      .time-est-result {
          font-size: 14px;
          color: #333333;
          text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
      }
    }
  }

  .top-bar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    background-color: #333;
    -webkit-app-region: drag;

    // &.win {
    //     background-color: #f8f8f8;
    //     border: 1px solid #e0e0e0;
    //     border-width: 0 0 1px 0;
    //     -webkit-app-region: no-drag;
    //     .preview-button-container {
    //         position: relative;
    //         float: left;
    //         margin-left: 0px;
    //         overflow: hidden;
    //         min-width: 50px;
    //         max-width: 50px;
    //         .img-container {
    //             width: 50px;
    //             padding: 0 13px;
    //             img {
    //                 padding: 12px 0;
    //                 width: 24px;
    //                 filter: brightness(0);
    //             }
    //         }
    //         &.previewing {
    //             background-color: unset;
    //             min-width: 150px;
    //             max-width: 270px;
    //             border: 3px solid #595959;
    //             border-width: 0 0 3px 0;
    //             .img-container {
    //                 opacity: 1;
    //             }
    //         }
    //     }
    //     .element-title {
    //         position: relative;
    //         float: left;
    //         top: 0;
    //         border: 3px solid #595959;
    //         border-width: 0 0 3px 0;
    //         margin-left: 0;
    //         padding: 0 5px;
    //         z-index: 1;
    //         text-shadow: none;
    //     }
    //     .hint-container {
    //         z-index: 1;
    //         top: 40px;
    //     }
    //     .go-button-container {
    //         position: relative;
    //         float: right;
    //         .go-btn {
    //             border-color: transparent transparent transparent #333333;
    //         }
    //     }
    //     .menu {
    //         &.camera {
    //             left: 65px;
    //             top: 80px;
    //         }
    //         &.export {
    //             top: 37px;
    //             right: 50px;
    //         }
    //     }
    // }
    .preview-button-container {
        position: absolute;
        display: inline-flex;
        justify-content: space-between;
        min-width: 40px;
        max-width: 40px;
        height: 40px;
        margin-left: 80px;
        transition: all 0.1s ease-in-out;
        .img-container {
            width: 40px;
            height: 40px;
            padding: 0 10px;
            display: inline-flex;
            opacity: 0.7;
            cursor: pointer;
            img {
                padding: 13px 0;
            }
            &:hover {
                opacity: 1;
            }
        }
        &.previewing {
            min-width: 140px;
            max-width: 260px;
            background-color: #eeeeee;
            img {
                filter: brightness(0);
            }
        }
        .title {
            width: calc(100% - 40px);
            height: 100%;
            padding-right: 10px;
            line-height: 40px;
            text-align: center;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #000000;
            opacity: 0.64;
        }
        .cross-wrapper {
            padding: 14px 10px;
            opacity: 0.64;
            width: 30px;
            height: 100%;
            cursor: pointer;
            .bars {
                display: block;
                position: absolute;
                background-color: #000000;
                width: 1.5px;
                height: 12px;
            }
            .bar1 {
                transform: translateX(4.8px) rotate(45deg);
            }
            .bar2 {
                transform: translateX(4.8px) rotate(-45deg);
            }
            &:hover {
                opacity: 1;
            }
        }
    }
    .go-button-container {
        display: inline-flex;
        position: absolute;
        right: 0;
        height: 40px;
        margin: 0 13px 0 0;
        opacity: 0.85;
        cursor: pointer;
        .go-btn {
            width: 0px;
            height: 0px;
            border-style: solid;
            border-color: transparent transparent transparent #ffffff;
            border-width: 7px 0px 7px 12px;
            margin: 13px 0;
        }
        .go-text {
            height: 40px;
            margin-right: 9px;
            line-height: 40px;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 0.95px;
            color: #353535;
        }
        &.no-machine {
            opacity: 0.2;
        }
        &:hover:not(.no-machine) {
            opacity: 1;
        }
    }
    .file-title {
        position: absolute;
        top: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        letter-spacing: 1.03px;
        text-align: center;
        color: #ffffff;
    }
    .element-title {
        pointer-events: none;
        position: absolute;
        z-index: 1;
        top: 45px;
        margin-left: 70px;
        height: 40px;
        line-height: 40px;
        color: #333333;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 0.95px;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
    .hint-container {
        position: absolute;
        z-index: 1;
        top: 80px;
        margin-left: 70px;
        height: 40px;
        line-height: 40px;
        color: #333333;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 0.95px;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
    .menu {
        background: #fff;
        position: fixed;
        z-index: 99;
        border-radius: 2px;
        &.camera {
            left: 65px;
            top: 50px;
        }
        &.export {
            top: 7px;
            right: 50px;
        }
        .arrow {
            min-width: 10px;
            min-height: 10px;
            width: 13px;
            height: 26px;
            position: absolute;
            top: 0;
            &.arrow-right {
                left: 100%;
            }
            &.arrow-left {
                right: 100%;
            }
        }
        .device-list {
            cursor: pointer;
            height: 160px;
            list-style: none;
            margin: 0;
            padding: .8rem;
            text-align: left;
            .select-printer {
                position: relative;
            }
            ul {
                border: 1px solid #e0e0e0;
                border-radius: 2px;
                color: $primaryColor;
                font-family: Helvetica Neue;
                font-size: 12px;
                font-weight: 500;
                height: 100%;
                margin: 0;
                overflow-y: scroll;
                padding: 0;
                width: 28rem;
                &::-webkit-scrollbar {
                    display: none;
                }
                .spinner-roller {
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
                li {
                    display: flex;
                    line-height: 2.8rem;
                    label {
                        cursor: pointer;
                    }
                    .name {
                        padding-left: 5px;
                        width: 150px;
                    }
                    .status {
                        width: 110px;
                    }
                    .connection-type {
                        line-height: 20px;
                        padding-right: 10px;

                        img {
                            margin-top: 7px;
                            image-rendering: optimizeSpeed;
                            image-rendering: -moz-crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: optimize-contrast;image-rendering: pixelated; -ms-interpolation-mode: nearest-neighbor;
                        }
                    }
                    .progress {
                        width: 50px;
                    }
                    .type {
                        padding-top: 3px;
                    }
                    &:hover {
                        background-color: $primaryColor;
                        color: #FFF;
                    }
                }
            }
        }
    }
    .modal-window {
        background: none;
    }

    .top-bar-menu-container {
      position: absolute;

      @keyframes rc-menu-show-slide-left {
        from {
          opacity: 0;
          transform: translateX(0.75rem);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }

      @keyframes rc-menu-hide-slide-left {
        from {
          opacity: 1;
          transform: none;
        }
        to {
          opacity: 0;
          transform: translateX(0.75rem);
        }
      }
      @keyframes rc-menu-show-slide-right {
        from {
          opacity: 0;
          transform: translateX(-0.75rem);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes rc-menu-hide-slide-right {
        from {
          opacity: 1;
          transform: none;
        }
        to {
          opacity: 0;
          transform: translateX(-0.75rem);
        }
      }
      @keyframes rc-menu-show-slide-top {
        from {
          opacity: 0;
          transform: translateY(0.75rem);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes rc-menu-hide-slide-top {
        from {
          opacity: 1;
          transform: none;
        }
        to {
          opacity: 0;
          transform: translateY(0.75rem);
        }
      }
      @keyframes rc-menu-show-slide-bottom {
        from {
          opacity: 0;
          transform: translateY(-0.75rem);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes rc-menu-hide-slide-bottom {
        from {
          opacity: 1;
          transform: none;
        }
        to {
          opacity: 0;
          transform: translateY(-0.75rem);
        }
      }

      .rc-menu-container {
        position: relative;
        width: 0px;
        height: 0px;
      }

      .rc-menu {
        margin: 0;
        padding: 0;
        list-style: none;
        display: none;
        box-sizing: border-box;
        width: max-content;
        position: absolute;
        z-index: 100;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: #fff;
      }
      .rc-menu:focus {
        outline: none;
      }
      .rc-menu--open, .rc-menu--closing {
        display: block;
      }
      .rc-menu__arrow {
        box-sizing: border-box;
        width: 0.75rem;
        height: 0.75rem;
        background-color: #fff;
        border: 1px solid transparent;
        border-left-color: rgba(0, 0, 0, 0.1);
        border-top-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        z-index: -1;
      }
      .rc-menu__arrow--dir-left {
        right: -0.375rem;
        transform: translateY(-50%) rotate(135deg);
      }
      .rc-menu__arrow--dir-right {
        left: -0.375rem;
        transform: translateY(-50%) rotate(-45deg);
      }
      .rc-menu__arrow--dir-top {
        bottom: -0.375rem;
        transform: translateX(-50%) rotate(-135deg);
      }
      .rc-menu__arrow--dir-bottom {
        top: -0.375rem;
        transform: translateX(-50%) rotate(45deg);
      }
      .rc-menu__item {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .rc-menu__item:focus {
        outline: none;
      }
      .rc-menu__item--hover {
        background-color: #ebebeb;
      }
      .rc-menu__item--focusable {
        cursor: default;
        background-color: inherit;
      }
      .rc-menu__item--disabled {
        cursor: default;
        color: #aaa;
      }
      .rc-menu__submenu {
        position: relative;
      }
      .rc-menu__group {
        box-sizing: border-box;
      }
      .rc-menu__radio-group {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .rc-menu__divider {
        height: 1px;
        margin: 0.5rem 0;
        background-color: rgba(0, 0, 0, 0.12);
      }

      .rc-menu-button {
        box-sizing: border-box;
      }

      .rc-menu {
        user-select: none;
        color: #212529;
        border: none;
        border-radius: 0.25rem;
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.133), 0 0.6px 2px rgba(0, 0, 0, 0.1);
        min-width: 10rem;
        padding: 0.5rem 0;
      }
      .rc-menu--open.rc-menu--dir-left {
        animation: rc-menu-show-slide-left 0.15s ease-out;
      }
      .rc-menu--closing.rc-menu--dir-left {
        animation: rc-menu-hide-slide-left 0.15s ease-in;
      }
      .rc-menu--open.rc-menu--dir-right {
        animation: rc-menu-show-slide-right 0.15s ease-out;
      }
      .rc-menu--closing.rc-menu--dir-right {
        animation: rc-menu-hide-slide-right 0.15s ease-in;
      }
      .rc-menu--open.rc-menu--dir-top {
        animation: rc-menu-show-slide-top 0.15s ease-out;
      }
      .rc-menu--closing.rc-menu--dir-top {
        animation: rc-menu-hide-slide-top 0.15s ease-in;
      }
      .rc-menu--open.rc-menu--dir-bottom {
        animation: rc-menu-show-slide-bottom 0.15s ease-out;
      }
      .rc-menu--closing.rc-menu--dir-bottom {
        animation: rc-menu-hide-slide-bottom 0.15s ease-in;
      }
      .rc-menu__item {
        position: relative;
        padding: 0.375rem 1.5rem;
      }
      .rc-menu--animation .rc-menu__item {
        transition-property: background-color, color;
        transition-duration: 0.15s;
        transition-timing-function: ease-in-out;
      }
      .rc-menu__item--active {
        color: #fff;
        background-color: #007bff;
      }
      .rc-menu__item--type-radio {
        padding-left: 2.2rem;
      }
      .rc-menu__item--type-radio::before {
        content: "○";
        position: absolute;
        left: 0.8rem;
        top: 0.55rem;
        font-size: 0.8rem;
      }
      .rc-menu__item--type-radio.rc-menu__item--checked::before {
        content: "●";
      }
      .rc-menu__item--type-checkbox {
        padding-left: 2.2rem;
      }
      .rc-menu__item--type-checkbox::before {
        position: absolute;
        left: 0.8rem;
      }
      .rc-menu__item--type-checkbox.rc-menu__item--checked::before {
        content: "✔";
      }
      .rc-menu__submenu > .rc-menu__item {
        padding-right: 2.5rem;
      }
      .rc-menu__submenu > .rc-menu__item::after {
        content: "❯";
        position: absolute;
        right: 1rem;
      }
      .rc-menu__header {
        color: #888;
        font-size: 0.8em;
        padding: 0.2rem 1.5rem;
        text-transform: uppercase;
      }
    }
  }

  .zoom-block {
    display: inline-flex;
    position: absolute;
    bottom: 10px;
    left: 65px;
    height: 20px;
    z-index: 1;
    .zoom-btn {
        cursor: pointer;
        display: inline-flex;
        width: 20px;
        height: 20px;
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
        img {
            width: 20px;
        }
        .bar {
            width: 2px;
            height: 12px;
            border-radius: 1px;
            background-color: #444444;
        }
        .bar1 {
            transform: translateX(9px) translateY(4px) rotate(90deg) ;
        }
        .bar2 {
            transform: translateX(7px) translateY(4px);
        }
    }
    .zoom-ratio {
        cursor: pointer;
        line-height: 20px;
        margin: 0 10px;
        color: #333333;
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }
    .react-contextmenu-wrapper {
        display: inherit;
    }
    .react-contextmenu {
        display: none;
    }
    .react-contextmenu--visible {
        display: unset;
        background-color: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.33);
        border-radius: 4px;
        padding: 5px 0px;
        .react-contextmenu-item {
            padding: 0px 20px;
            line-height: 20px;
            height: 20px;
            font-size: 12px;
            &:hover {
                color: #FFFFFF;
                background-color: #2e5dea;
            }
        }
    }
  }

  .color-picker-panel {
    z-index: 2;
    right: 0px;
    position: fixed;
    width: 200px;
    height: 250px;
    background: white;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
    .pcr-button {
        display: none;
    }
    .pcr-app {
        width: 100%;
        height: calc(100% - 40px);
        padding: 10px;
        .pcr-picker {
            border-style: solid;
            border-color: #FFF;
            border-radius: 100%;
            border-width: 2px;
            height: 18px;
            width: 18px;
            position: absolute;
        }
        .pcr-selection {
            width: 100%;
            height: 200px;
            padding-bottom: 5px;
            .pcr-color-preview {
                width: 100%;
                height: 20px;
                margin-bottom: 5px;
                .pcr-last-color {
                    border-radius: 3px 0px 0px 3px;
                    margin: 0px;
                    padding: 0px;
                    border: 0px;
                    background: var(--pcr-color);
                    float: left;
                    width: 90px;
                    height: 20px;
                }
                .pcr-current-color {
                    border-radius: 0px 3px 3px 0px;
                    background: var(--pcr-color);
                    float: left;
                    width: 90px;
                    height: 20px;
                }
            }
            .pcr-color-palette {
                width: 180px;
                height: 150px;
                position: absolute;
                .pcr-palette {
                    height: 100%;
                    border-radius: 3px;
                }
            }
            .pcr-color-chooser {
                position: absolute;
                margin-top: 10px;
                top: 180px;
                height: 8px;
                width: 180px;
                .pcr-slider {
                    height: 8px;
                }
                .pcr-picker {
                    height: 12px;
                    width: 12px;
                    top: -2px;
                }
                .pcr-hue {
                    background-image: linear-gradient(90deg, red, rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), red);
                    border-radius: 3px;
                }
            }
        }
        .pcr-interaction {
            .pcr-result {
                border-style: solid;
                padding: 5px;
                border-color: (192, 192, 192);
                border-radius: 2px;
                width: 70px;
                height: 30px;
                line-height: 25px;
                border-width: 2px;
            }
        }
    }
    .footer {
        height: 40px;
        padding: 0px 10px 5px 40px;
        margin-top: -20px;
        .btn {
            height: 30px;
            line-height: 30px;
        }
    }
    .modal-background {
        z-index: -1;
        top: 0px;
        left: 0px;
        position: fixed;
        height: 100%;
        width: 100%;
    }
  }

  .modal-window {
    display: flex;
    background: rgba(0, 0, 0, .1);
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: $max-z-index;
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
        display: flex;
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
        display: flex;
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

  // @media {
  //   screen {
  //     and {
  //       (max-width {
  //         &:1100px) {
  //           #tools_bottom: not(.expanded) #palette_holder {
  //  left: 410px;
  //           overflow-x: scroll;
  //           padding: 0 5px;
  //           margin-top: 2px;
  //           height: 30px;
  //         }
  //       }
  //     }
  //   }
  // }
`;
