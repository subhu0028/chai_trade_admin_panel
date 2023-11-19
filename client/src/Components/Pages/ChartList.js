// ChartList.js
import React, { useState, useEffect } from "react";
import '../List.css';
import '../Main.css';
import '../Form.css';

import axios from "../../api/axiosConfig.js";

function ChartList() {

	const [charts, setCharts] = useState([]);
	useEffect(() => {
		axios.get("/charts/getCharts").then((res) => setCharts(res.data.data));
	}, []);


	return (
		<main>
			{charts.length > 0 ? (
				<div className="grid">
					{charts.map((chart) => (
						<article className="card product-item" key={chart._id}>
							<header className="card__header">
								<h1 className="product__title">{chart.chart_name}</h1>
							</header>
							<div className="card__content">
								<p className="product__description">{chart.chart_ltp}</p>
								<p className="product__description">{chart.chart_change}</p>
								<p className="product__description">{chart.chart_percentage}</p>
								<p className="product__description">{chart.type}</p>
							</div>
							<div className="card__action">
								<a
									href={`/admin/edit-chart/${chart._id}?edit=true`}
									className="btn"
								>
									Edit
								</a>
								<form action="/admin/delete-chart" method="POST">
									<input type="hidden" value={chart._id} name="chartId" />
									<button className="btn" type="submit">
										Delete
									</button>
								</form>
							</div>
						</article>
					))}
				</div>
			) : (
				<h1>No Charts Found!</h1>
			)}
		</main>
	);
}

export default ChartList;
