import mysql from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';

// データベース接続設定
const connection = await mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: 0
});

export async function GET() {
    try {
        // データベースクエリの実行
        const [rows, fields] = await connection.execute('SELECT * FROM test_qtl');

        // クエリ結果のレスポンス
        return NextResponse.json(rows);
    } catch (error) {
        // エラー処理
        return NextResponse.json({ message: 'Database query failed', error });
    }
}