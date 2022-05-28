import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props = {
	populationdata: {
		prefName: string;
		data: { year: number; value: number }[];
	}[];
};

export const Graph: React.VFC<Props> = ({ populationdata }) => {
	let series: Highcharts.SeriesOptionsType[] = [];
	let categories: string[] = [];

	for (let p of populationdata) {
		let data: number[] = [];

		for (let pd of p.data) {
			data.push(pd.value);
			categories.push(String(pd.year));
		}

		series.push({
			type: 'line',
			name: p.prefName,
			data: data,
		});
	}
	const options: Highcharts.Options = {
		title: {
			text: '総人口推移',
		},
		xAxis: {
			title: {
				text: '年度',
			},
			categories: categories,
		},
		yAxis: {
			title: {
				text: '人口数',
			},
		},
		series: series.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : series,
	};

	return (
		<figure>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</figure>
	);
};
