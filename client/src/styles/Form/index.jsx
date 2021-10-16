import styled from "styled-components";

export const Form = styled.form`
    background: #fff;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    width: min(34rem, 100%);

    > h2 {
        font-size: 2rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: none;
        outline: none;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;

        position: relative;
    }

    > p {
        > a {
            color: #0984e3;
            text-decoration: none;
            position: relative;

            &::after {
                content: "";
                display: block;
                position: absolute;
                background-color: #0984e3;
                width: 100%;
                height: 1px;
                right: 0;
                transition: transform 0.3s ease;
                transform: scale(0);
            }

            &:hover::after {
                transform: scale(1);
            }
        }
    }
`;

export const TogglePassword = styled.button``;
