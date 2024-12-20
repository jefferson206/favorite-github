// @ts-nocheck
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 150px;
        border-radius: 50%;
        margin: 20px 0;
    }

    h1{
        font-size: 30px;
        color: #0D2636;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
`;

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px;

        & + li{
            margin-top: 12px;
        }

        img{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid var(--primary-color);
        }

        div{
            flex: 1;
            margin-left: 12px;

            strong{
                font-size: 15px;

                a{
                    display: flex;
                    text-decoration: none;
                    color: #222;
                    padding-bottom: 5px;
                    transition: 0.3s;

                    &:hover{
                        color: #0071db;
                    }
                }

                span{
                    background: #222;
                    color: #fff;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 5px 7px;
                    cursor: default;
                    & + span{
                        margin-left: 10px;
                    }
                }
            }

            p{
                margin-top: 10px;
                font-size: 12px;
                color: #000;
            }
        }
    }
`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        outline: 0;
        border: 0;
        background: #222;
        color: #FFF;
        padding: 5px 10px;
        border-radius: 4px;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;

export const FilterList = styled.div`
    margin: 15px 0;

    button{
        outline: 0;
        border: 0;
        margin: 0 3px;
        padding: 8px;
        border-radius: 4px;

        &:nth-child(${props => props.active + 1}) {
            background: #0071db;
            color: #FFF;
        }
    }
`;