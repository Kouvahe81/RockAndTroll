import { render, screen, fireEvent, getByPlaceholderText} from '@testing-library/react';
import '@testing-library/jest-dom'
import LineUp from "./pages/LineUp";
import Inscription from './pages/Inscription';
import AchatTicket from './pages/Ticket';
import Ticket from './pages/Ticket';



test('bouton Vendredi', () => { 
    render(<LineUp></LineUp>)
    const fridayButton = screen.queryByText('Vendredi')
    expect(fridayButton).toBeInTheDocument()
 })

//test('Affichage line-up Samedi', () => { 
//    render(<ShowGroupesSamedi></ShowGroupesSamedi>)
//    const linkElement = screen.getByText('SCENE RASTA SQUARE');
//    expect(linkElement).toBeInTheDocument();
// })


test('formulaire mail vide', () => { 
    const { getByTestId } = render(<Inscription/>);
    const mailEl = getByTestId("mail")

    expect(mailEl.value).toBe("")
 })


 it("App loads with initial state of 0", () => {
    const { getByTestId } = render(<Ticket />);
    const countValue = getByTestId("countday1");
    expect(countValue.textContent).toBe("0");
  });

  it("Increment and decrement buttons work", () => {
   const { getByTestId } = render(<Ticket />);
   const countValue = getByTestId("countday1");
   const increment = getByTestId("addTicketOneDay");
   const decrement = getByTestId("suppTicketOneDay");
   expect(countValue.textContent).toBe("0");
   fireEvent.click(increment);
   expect(countValue.textContent).toBe("1");
   fireEvent.click(decrement);
   expect(countValue.textContent).toBe("0");
 });

 