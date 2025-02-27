import React from "react";
import tableData  from '../../API stores/json/OurService/diagnosticServiceData.json'
import Layout from "../../components/layout/layout.jsx";
import NewsLayout from "../../components/layout/newsLayout.jsx";
import BodyLayout from "../../components/layout/bodyLayout.jsx";

const DiagnosticServicePage = () => {
    return (
        <Layout>
            <NewsLayout>
                <BodyLayout title={'Diagnostic Service'}>
                    <div className="container mt-4">
                        {tableData.tables.map((table, tableIndex) => (
                            <div key={tableIndex} className="mb-4">
                                <h2 className="text-center bg-primary text-white p-2 rounded">{table.title}</h2>
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        {Array.from({ length: table.columns }).map((_, colIndex) => (
                                            <th key={colIndex}>Service</th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {table.data.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {row.map((item, colIndex) => (
                                                <td key={colIndex}>{item}</td>
                                            ))}
                                            {table.columns === 2 && row.length === 1 && <td></td>}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </BodyLayout>
            </NewsLayout>
        </Layout>
    );
};

export default DiagnosticServicePage;
