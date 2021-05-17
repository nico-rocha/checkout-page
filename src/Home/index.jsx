import { useState } from 'react';
import './style.css';
import TextField from '../components/TextField';
import Form from '../components/Form';
import SelectField from '../components/SelectField';
import SelectCountryList from '../components/SelectCountryList';
import TextFieldPostalCode from '../components/TextFieldPostalCode';
import InputCheckBox from '../components/InputCheckBox';
import Button from '../components/Button';
import photoVintageBackbag from '../assets/photo1.png';
import photoLeviShoes from '../assets/photo2.png';

function Home() {
	const [countItemOne, setCountItemOne] = useState(1);
	const [countItemTwo, setCountItemTwo] = useState(1);
	const [total, setTotal] = useState(148.98);

	function handleClickItemOneAdd() {
		if (countItemOne < 9) {
			setCountItemOne(countItemOne + 1);
			setTotal(total + 54.99);
		}
	}

	function handleClickItemOneRemove() {
		if (countItemOne > 1) {
			setCountItemOne(countItemOne - 1);
			setTotal(total - 54.99);
		}
	}

	function handleClickItemTwoAdd() {
		if (countItemTwo < 9) {
			setCountItemTwo(countItemTwo + 1);
			setTotal(total + 74.99);
		}
	}

	function handleClickItemTwoRemove() {
		if (countItemTwo > 1) {
			setCountItemTwo(countItemTwo - 1);
			setTotal(total - 74.99);
		}
	}

	return (
		<>
			<main>
				<section>
					<h1 className="checkout-title">Checkout</h1>
					<h3 className="contact-information">Contact information</h3>
					<Form>
						<TextField label="E-mail" type="text" placeholder="Enter your e-mail..." />

						<TextField
							label="Phone"
							type="tel"
							placeholder="Enter your phone..."
						/>
						<h3 className="shipping-address">Shipping address</h3>
						<TextField label="Full name" placeholder="Your name..."type="text" />

						<TextField label="Address" type="text" placeholder="Your address..." />
						<TextField label="City" type="text" placeholder="Your city..." />

						<div className="postal-code-country">
							<SelectField label="Country" type="text" list="countries" placeholder="Your country...">
								<SelectCountryList
									optionnone="Your country..."
									optionOne="Brasil"
									optionTwo="China"
									optionThree="EUA"
								/>
							</SelectField>

							<TextFieldPostalCode label="Postal code" type="text" placeholder="Your postal code..." />
						</div>

						<InputCheckBox type="checkbox" />

						<Button type="submit" />
					</Form>
				</section>

				<section className="cart">
					<div>
						<h3>Vintage Backbag</h3>
						<div className="item-vintage-backbag">
							<img src={photoVintageBackbag} alt="Vintage Backbag" />
							<div className="content">
								<div className="prices">
									<span className="on-sale-price">$54.99</span>
									<span className="old-price">$94.99</span>
								</div>
								<div className="buttons">
									<button onClick={handleClickItemOneAdd} className="button-add-remove">
										+
									</button>
									<span>{countItemOne}</span>
									<button onClick={handleClickItemOneRemove} className="button-add-remove">
										–
									</button>
								</div>
							</div>
						</div>
						<h3>Levi Shoes</h3>
						<div className="item-levi-shoes">
							<img src={photoLeviShoes} alt="Levi Shoes" />
							<div className="content">
								<div className="prices">
									<span className="on-sale-price">$74.99</span>
									<span className="old-price">$124.99</span>
								</div>
								<div className="buttons">
									<button onClick={handleClickItemTwoAdd} className="button-add-remove">
										+
									</button>
									<span>{countItemTwo}</span>
									<button onClick={handleClickItemTwoRemove} className="button-add-remove">
										–
									</button>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="shipping">
							<span>Shipping</span>
							<span className="shipping-price">$19</span>
						</div>
						<div className="total">
							<span>Total</span>
							<span className="total-price">${total.toFixed(2)}</span>
						</div>
					</div>
				</section>
			</main>

			<footer>create by username - devchallenges.io</footer>
		</>
	);
}

export default Home;
